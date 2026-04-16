import "./globals.css";

export const metadata = {
  title: "Notes-101",
  description: "A Markdown-driven personal revision system built on the existing Next.js UI.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
