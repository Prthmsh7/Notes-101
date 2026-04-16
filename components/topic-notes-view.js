"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import TopicWorkspace from "./topic-workspace";

export default function TopicNotesView({ topic }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(topic.notes.flatMap((note) => note.tags))).sort((a, b) => a.localeCompare(b))],
    [topic.notes]
  );

  const filteredNotes = useMemo(() => {
    return topic.notes.filter((note) => {
      const matchesQuery = !deferredQuery || note.searchText.includes(deferredQuery);
      const matchesTag = activeTag === "All" || note.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [activeTag, deferredQuery, topic.notes]);

  return (
    <TopicWorkspace
      activeNoteSlug={null}
      headerRight={
        topic.notes[0] ? (
          <Link className="panel-link subtle" href={`/topics/${topic.slug}/${topic.notes[0].slug}`}>
            Start with page {topic.notes[0].pageLabel}
          </Link>
        ) : null
      }
      sectionLabel="Topic overview"
      topic={topic}
    >
      <div className="topic-hero">
        <div className="hero-copy">
          <p className="section-kicker">Topic notebook</p>
          <h1 className="topic-title">{topic.title}</h1>
          <p className="catalog-lead">{topic.summary}</p>
          <div className="hero-stats">
            <div>
              <strong>{topic.noteCount}</strong>
              <span>pages</span>
            </div>
            <div>
              <strong>{topic.tags.length}</strong>
              <span>tags</span>
            </div>
            <div>
              <strong>{filteredNotes.length}</strong>
              <span>visible</span>
            </div>
          </div>
        </div>
      </div>

      <div className="workspace-toolbar">
        <div className="inline-search">
          <input
            id="topic-search"
            name="topic-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search inside ${topic.title}`}
            type="search"
            value={query}
          />
        </div>
        <div className="filter-strip">
          {tags.map((tag) => (
            <button
              className={`tag-filter${tag === activeTag ? " active" : ""}`}
              key={tag}
              onClick={() => setActiveTag(tag)}
              type="button"
            >
              {tag === "All" ? "All pages" : `#${tag}`}
            </button>
          ))}
        </div>
      </div>

      {filteredNotes.length ? (
        <div className="note-grid">
          {filteredNotes.map((note) => (
            <Link className="note-card" href={`/topics/${note.topicSlug}/${note.slug}`} key={note.slug}>
              <div className="note-card-top">
                <span>Page {note.pageLabel}</span>
                <span>{note.difficulty}</span>
              </div>
              <strong>{note.title}</strong>
              <p>{note.excerpt}</p>
              <div className="note-chip-row">
                {note.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No pages match this filter</h2>
          <p>Try a different tag or a broader search phrase.</p>
        </div>
      )}
    </TopicWorkspace>
  );
}
