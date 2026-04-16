import { notFound } from "next/navigation";
import MarkdownNote from "components/markdown-note";
import { formatDisplayDate, getAllTopics, getTopicBySlug, getTopicNavigation } from "lib/notes";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTopics().flatMap((topic) =>
    topic.notes.map((note) => ({
      topic: topic.slug,
      slug: note.slug
    }))
  );
}

export default function NotePage({ params }) {
  const topic = getTopicBySlug(params.topic);
  const navigation = getTopicNavigation(params.topic, params.slug);
  const note = navigation.current;

  if (!note || !topic) {
    notFound();
  }

  return (
    <MarkdownNote
      note={{ ...note, dateLabel: formatDisplayDate(note.date) }}
      nextNote={navigation.next ? { ...navigation.next, dateLabel: formatDisplayDate(navigation.next.date) } : null}
      previousNote={
        navigation.previous ? { ...navigation.previous, dateLabel: formatDisplayDate(navigation.previous.date) } : null
      }
      topic={{
        ...topic,
        notes: topic.notes.map((topicNote) => ({
          ...topicNote,
          dateLabel: formatDisplayDate(topicNote.date)
        }))
      }}
    />
  );
}
