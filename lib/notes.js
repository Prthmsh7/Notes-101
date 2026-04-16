import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const NOTES_ROOT = path.join(process.cwd(), "notes");

const TOPIC_ICON_MAP = {
  cpp: "cbadge",
  "c++": "cbadge",
  rust: "rust",
  python: "python",
  javascript: "javascript",
  typescript: "typescript",
  sre: "sre",
  frontend: "browser",
  backend: "backend",
  scripting: "script",
  ai: "ai",
  "data-engineering": "pipeline",
  linux: "linux"
};

function titleCase(value) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function stripMarkdown(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^#+\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/\*\*|__|\*|_/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractExcerpt(markdown) {
  const plainText = stripMarkdown(markdown);
  return plainText.slice(0, 180).trim() + (plainText.length > 180 ? "..." : "");
}

function safeDate(input, fallback) {
  if (!input) {
    return fallback.toISOString();
  }

  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) {
    return fallback.toISOString();
  }

  return parsed.toISOString();
}

function formatTopicTitle(topicSlug) {
  if (topicSlug.toLowerCase() === "sre") {
    return "SRE";
  }

  if (topicSlug.toLowerCase() === "ai") {
    return "AI";
  }

  if (topicSlug.toLowerCase() === "cpp") {
    return "C++";
  }

  return titleCase(topicSlug);
}

function getTopicIcon(topicSlug) {
  return TOPIC_ICON_MAP[topicSlug.toLowerCase()] || "note";
}

function getTopicDirectories() {
  if (!fs.existsSync(NOTES_ROOT)) {
    return [];
  }

  return fs
    .readdirSync(NOTES_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function getMarkdownFiles(topicSlug) {
  const topicDirectory = path.join(NOTES_ROOT, topicSlug);

  if (!fs.existsSync(topicDirectory)) {
    return [];
  }

  return fs
    .readdirSync(topicDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function getNoteFromFile(topicSlug, filename) {
  const filePath = path.join(NOTES_ROOT, topicSlug, filename);
  const source = fs.readFileSync(filePath, "utf8");
  const fileStats = fs.statSync(filePath);
  const { data, content } = matter(source);
  const slug = filename.replace(/\.md$/, "");
  const excerpt = extractExcerpt(content);
  const searchText = `${data.title || slug} ${excerpt} ${stripMarkdown(content)} ${normalizeTags(data.tags).join(" ")}`.toLowerCase();
  const date = safeDate(data.date, fileStats.mtime);

  return {
    slug,
    sourceName: filename,
    topicSlug,
    topicTitle: formatTopicTitle(topicSlug),
    topicIcon: getTopicIcon(topicSlug),
    title: typeof data.title === "string" && data.title.trim() ? data.title.trim() : titleCase(slug),
    tags: normalizeTags(data.tags),
    date,
    order: Number.isFinite(Number(data.order)) ? Number(data.order) : null,
    difficulty: typeof data.difficulty === "string" && data.difficulty.trim() ? data.difficulty.trim() : "Mixed",
    excerpt,
    content,
    searchText
  };
}

function byNewest(first, second) {
  return new Date(second.date).getTime() - new Date(first.date).getTime();
}

function byStudyOrder(first, second) {
  if (first.order !== null && second.order !== null && first.order !== second.order) {
    return first.order - second.order;
  }

  if (first.order !== null && second.order === null) {
    return -1;
  }

  if (first.order === null && second.order !== null) {
    return 1;
  }

  return first.sourceName.localeCompare(second.sourceName);
}

function formatPageNumber(index) {
  return String(index + 1).padStart(2, "0");
}

export function getTopicNotes(topicSlug) {
  return getMarkdownFiles(topicSlug)
    .map((filename) => getNoteFromFile(topicSlug, filename))
    .sort(byStudyOrder)
    .map((note, index) => ({
      ...note,
      pageNumber: index + 1,
      pageLabel: formatPageNumber(index)
    }));
}

export function getAllNotes() {
  return getTopicDirectories().flatMap((topicSlug) => getTopicNotes(topicSlug)).sort(byNewest);
}

export function getAllTopics() {
  return getTopicDirectories()
    .map((topicSlug) => {
      const notes = getTopicNotes(topicSlug);
      const latestNote = [...notes].sort(byNewest)[0];
      const uniqueTags = Array.from(new Set(notes.flatMap((note) => note.tags))).slice(0, 6);

      return {
        slug: topicSlug,
        title: formatTopicTitle(topicSlug),
        icon: getTopicIcon(topicSlug),
        noteCount: notes.length,
        latestDate: latestNote?.date || null,
        latestNote,
        summary: latestNote?.excerpt || `Notes collected for ${formatTopicTitle(topicSlug)}.`,
        tags: uniqueTags,
        notes,
        searchText: `${formatTopicTitle(topicSlug)} ${uniqueTags.join(" ")} ${notes.map((note) => note.searchText).join(" ")}`.toLowerCase()
      };
    })
    .sort((first, second) => {
      if (first.latestDate && second.latestDate) {
        return new Date(second.latestDate).getTime() - new Date(first.latestDate).getTime();
      }

      return first.title.localeCompare(second.title);
    });
}

export function getTopicBySlug(topicSlug) {
  return getAllTopics().find((topic) => topic.slug === topicSlug) || null;
}

export function getNoteBySlug(topicSlug, noteSlug) {
  return getTopicNotes(topicSlug).find((note) => note.slug === noteSlug) || null;
}

export function getTopicNavigation(topicSlug, noteSlug) {
  const notes = getTopicNotes(topicSlug);
  const currentIndex = notes.findIndex((note) => note.slug === noteSlug);

  if (currentIndex === -1) {
    return {
      current: null,
      next: null,
      previous: null,
      notes
    };
  }

  return {
    current: notes[currentIndex],
    previous: currentIndex > 0 ? notes[currentIndex - 1] : null,
    next: currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null,
    notes
  };
}

export function getAllTags() {
  return Array.from(new Set(getAllNotes().flatMap((note) => note.tags))).sort((a, b) => a.localeCompare(b));
}

export function formatDisplayDate(dateString) {
  if (!dateString) {
    return "No date";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(dateString));
}
