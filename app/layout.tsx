import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bot Detector – Detect Artificial Engagement & Vote Manipulation",
  description: "Analyze voting patterns to identify self-upvoting bots and fake engagement across platforms. Built for community managers and platform operators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ba93fdbf-a8c3-4ef0-98f2-3ed70a125f2e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
