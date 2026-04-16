"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { SearchIcon, TopicIcon } from "./topic-icon";

export default function HomeDashboard({ notes, topics }) {
  const [query, setQuery] = useState("");
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
          <div className="catalog-panel-inner home-shell">
            <div className="catalog-toolbar home-toolbar">
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
                  <Link className="topic-card compact" href={`/topics/${topic.slug}`} key={topic.slug}>
                    <div className="topic-card-top">
                      <TopicIcon name={topic.icon} />
                      <span className="topic-card-count">{topic.noteCount} note{topic.noteCount === 1 ? "" : "s"}</span>
                    </div>
                    <div className="topic-card-body">
                      <strong>{topic.title}</strong>
                    </div>
                    <div className="topic-card-action">Open topic</div>
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
