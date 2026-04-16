"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { SearchIcon, TopicIcon } from "./topic-icon";

export default function HomeDashboard({ notes, topics, totalTags }) {
  const [query, setQuery] = useState("");
  const [selectedTopicSlug, setSelectedTopicSlug] = useState(topics[0]?.slug || "");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filteredNotes = useMemo(() => {
    if (!deferredQuery) {
      return notes;
    }

    return notes.filter((note) => note.searchText.includes(deferredQuery));
  }, [deferredQuery, notes]);

  const filteredTopics = useMemo(() => {
    if (!deferredQuery) {
      return topics;
    }

    const matchedTopicSlugs = new Set(filteredNotes.map((note) => note.topicSlug));
    return topics.filter((topic) => topic.searchText.includes(deferredQuery) || matchedTopicSlugs.has(topic.slug));
  }, [deferredQuery, filteredNotes, topics]);

  const selectedTopic =
    filteredTopics.find((topic) => topic.slug === selectedTopicSlug) || filteredTopics[0] || topics[0] || null;

  const visibleResults = filteredNotes.slice(0, 8);

  return (
    <main className="catalog-shell">
      <div className="catalog-frame">
        <header className="catalog-header">
          <div className="brand-block">
            <span className="brand-kicker">Markdown revision</span>
            <Link className="notebook-title" href="/">
              Prathmesh&apos;s Notebook
            </Link>
          </div>
          <div className="header-actions">
            <label className="search-bar" htmlFor="global-search">
              <SearchIcon />
              <input
                id="global-search"
                name="global-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search note titles, tags, or content"
                type="search"
                value={query}
              />
            </label>
          </div>
        </header>

        <section className="catalog-panel">
          <div className="catalog-panel-inner">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="section-kicker">Knowledge revision system</p>
                <h1 className="catalog-title">Build skills that stand out</h1>
                <p className="catalog-lead">
                  Your notes are now the source of truth. Browse topics, open individual Markdown
                  notes, and revise fast from a clean reading-focused interface.
                </p>
                <div className="hero-stats">
                  <div>
                    <strong>{topics.length}</strong>
                    <span>topics</span>
                  </div>
                  <div>
                    <strong>{notes.length}</strong>
                    <span>notes</span>
                  </div>
                  <div>
                    <strong>{totalTags}</strong>
                    <span>tags</span>
                  </div>
                </div>
              </div>

              {selectedTopic ? (
                <aside className="focus-panel">
                  <p className="focus-label">Selected topic</p>
                  <div className="focus-panel-top">
                    <TopicIcon name={selectedTopic.icon} />
                    <div>
                      <h2>{selectedTopic.title}</h2>
                      <span>{selectedTopic.noteCount} note{selectedTopic.noteCount === 1 ? "" : "s"}</span>
                    </div>
                  </div>
                  <p className="focus-summary">{selectedTopic.summary}</p>
                  <div className="focus-meta">
                    {selectedTopic.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                  {selectedTopic.latestNote ? (
                    <Link className="panel-link" href={`/topics/${selectedTopic.slug}/${selectedTopic.latestNote.slug}`}>
                      Open latest note
                    </Link>
                  ) : null}
                </aside>
              ) : null}
            </div>

            <div className="catalog-toolbar">
              <div>
                <p className="toolbar-label">Detected topics</p>
                <span className="toolbar-count">
                  {filteredTopics.length} topic{filteredTopics.length === 1 ? "" : "s"}
                </span>
              </div>
              {query ? (
                <button className="clear-button" onClick={() => setQuery("")} type="button">
                  Clear search
                </button>
              ) : null}
            </div>

            {filteredTopics.length ? (
              <div className="topic-grid">
                {filteredTopics.map((topic) => (
                  <Link
                    className={`topic-card${selectedTopic?.slug === topic.slug ? " active" : ""}`}
                    href={`/topics/${topic.slug}`}
                    key={topic.slug}
                    onFocus={() => setSelectedTopicSlug(topic.slug)}
                    onMouseEnter={() => setSelectedTopicSlug(topic.slug)}
                  >
                    <div className="topic-card-top">
                      <TopicIcon name={topic.icon} />
                      <span className="topic-card-count">{topic.noteCount} note{topic.noteCount === 1 ? "" : "s"}</span>
                    </div>
                    <strong>{topic.title}</strong>
                    <p>{topic.summary}</p>
                    <div className="topic-card-tags">
                      {topic.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h2>No matching topic yet</h2>
                <p>Try a broader search term or add a new Markdown file inside the `notes` folder.</p>
              </div>
            )}

            {query ? (
              <section className="results-panel">
                <div className="catalog-toolbar compact">
                  <div>
                    <p className="toolbar-label">Matching notes</p>
                    <span className="toolbar-count">
                      {filteredNotes.length} result{filteredNotes.length === 1 ? "" : "s"}
                    </span>
                  </div>
                </div>

                {visibleResults.length ? (
                  <div className="result-list">
                    {visibleResults.map((note) => (
                      <Link className="result-card" href={`/topics/${note.topicSlug}/${note.slug}`} key={`${note.topicSlug}-${note.slug}`}>
                        <div className="result-card-top">
                          <span>{note.topicTitle}</span>
                          <span>{note.difficulty}</span>
                        </div>
                        <strong>{note.title}</strong>
                        <p>{note.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state compact">
                    <h2>No matching note yet</h2>
                    <p>Your search checks both note titles and note content.</p>
                  </div>
                )}
              </section>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
