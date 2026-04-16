import { notFound } from "next/navigation";
import TopicNotesView from "components/topic-notes-view";
import { formatDisplayDate, getTopicBySlug } from "lib/notes";

export const dynamic = "force-dynamic";

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
