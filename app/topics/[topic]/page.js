import { notFound } from "next/navigation";
import TopicNotesView from "components/topic-notes-view";
import { formatDisplayDate, getAllTopics, getTopicBySlug } from "lib/notes";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTopics().map((topic) => ({
    topic: topic.slug
  }));
}

export default function TopicPage({ params }) {
  const topic = getTopicBySlug(params.topic);

  if (!topic) {
    notFound();
  }

  return (
    <TopicNotesView
      topic={{
        ...topic,
        notes: topic.notes.map((note) => ({
          ...note,
          dateLabel: formatDisplayDate(note.date)
        }))
      }}
    />
  );
}
