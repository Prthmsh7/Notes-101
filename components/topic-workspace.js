import Link from "next/link";
import { TopicIcon } from "./topic-icon";

function pagePath(topicSlug, noteSlug) {
  return `/topics/${topicSlug}/${noteSlug}`;
}

export default function TopicWorkspace({
  topic,
  activeNoteSlug = null,
  children,
  headerRight = null,
  sectionLabel = "Topic notebook"
}) {
  return (
    <main className="catalog-shell">
      <div className="catalog-frame">
        <header className="catalog-header">
          <div className="brand-block">
            <span className="brand-kicker">{sectionLabel}</span>
            <Link className="notebook-title" href="/">
              Prathmesh&apos;s Notebook
            </Link>
          </div>
          <div className="header-actions note-actions">{headerRight}</div>
        </header>

        <section className="catalog-panel">
          <div className="catalog-panel-inner workspace-shell">
            <nav className="breadcrumbs">
              <Link href="/">All topics</Link>
              <span>/</span>
              <span>{topic.title}</span>
            </nav>

            <div className="workspace-grid">
              <aside className="topic-sidebar">
                <div className="topic-sidebar-header">
                  <div className="topic-sidebar-title-row">
                    <TopicIcon name={topic.icon} />
                    <div>
                      <p className="section-kicker">Topic pages</p>
                      <h2>{topic.title}</h2>
                    </div>
                  </div>
                  <p className="topic-sidebar-summary">{topic.noteCount} page{topic.noteCount === 1 ? "" : "s"} available for revision</p>
                </div>

                <div className="topic-tree">
                  {topic.notes.map((note) => {
                    const isActive = note.slug === activeNoteSlug;

                    return (
                      <Link
                        className={`tree-item${isActive ? " active" : ""}`}
                        href={pagePath(topic.slug, note.slug)}
                        key={note.slug}
                      >
                        <span className="tree-index">{note.pageLabel}</span>
                        <span className="tree-dot" />
                        <span className="tree-copy">
                          <strong>{note.title}</strong>
                          <small>{note.difficulty}</small>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </aside>

              <div className="workspace-main">{children}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
