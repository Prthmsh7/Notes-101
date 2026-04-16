import HomeDashboard from "components/home-dashboard";
import { formatDisplayDate, getAllNotes, getAllTags, getAllTopics } from "lib/notes";

export default function HomePage() {
  const topics = getAllTopics().map((topic) => ({
    ...topic,
    latestDateLabel: topic.latestDate ? formatDisplayDate(topic.latestDate) : null,
    latestNote: topic.latestNote
      ? {
          ...topic.latestNote,
          dateLabel: formatDisplayDate(topic.latestNote.date)
        }
      : null
  }));

  const notes = getAllNotes().map((note) => ({
    ...note,
    dateLabel: formatDisplayDate(note.date)
  }));

  return <HomeDashboard notes={notes} topics={topics} totalTags={getAllTags().length} />;
}
