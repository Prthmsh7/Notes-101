import "./globals.css";

export const metadata = {
  title: "Notes-101",
  description: "A Markdown-driven personal revision system built on the existing Next.js UI."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
