import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import TopicWorkspace from "./topic-workspace";

export default function MarkdownNote({ note, topic, previousNote, nextNote }) {
  return (
    <TopicWorkspace
      activeNoteSlug={note.slug}
      headerRight={
        <Link className="panel-link subtle" href={`/topics/${note.topicSlug}`}>
          Back to {note.topicTitle}
        </Link>
      }
      sectionLabel="Revision note"
      topic={topic}
    >
      <article className="note-article">
        <header className="note-hero">
          <div className="note-page-badge">Page {note.pageLabel}</div>
          <p className="section-kicker">{note.topicTitle}</p>
          <h1 className="note-title">{note.title}</h1>
          <p className="catalog-lead">{note.excerpt}</p>
          <div className="note-meta">
            <span>{note.difficulty}</span>
            <span>{note.dateLabel}</span>
            {note.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </header>

        <div className="markdown-card">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]}>
            {note.content}
          </ReactMarkdown>
        </div>

        <nav className="page-navigation" aria-label="Page navigation">
          {previousNote ? (
            <Link className="pager-card" href={`/topics/${previousNote.topicSlug}/${previousNote.slug}`}>
              <span className="pager-direction">Previous</span>
              <strong>
                Page {previousNote.pageLabel}: {previousNote.title}
              </strong>
            </Link>
          ) : (
            <div className="pager-card muted">
              <span className="pager-direction">Previous</span>
              <strong>This is the first page</strong>
            </div>
          )}

          {nextNote ? (
            <Link className="pager-card align-right" href={`/topics/${nextNote.topicSlug}/${nextNote.slug}`}>
              <span className="pager-direction">Next</span>
              <strong>
                Page {nextNote.pageLabel}: {nextNote.title}
              </strong>
            </Link>
          ) : (
            <div className="pager-card muted align-right">
              <span className="pager-direction">Next</span>
              <strong>This is the last page</strong>
            </div>
          )}
        </nav>
      </article>
    </TopicWorkspace>
  );
}
