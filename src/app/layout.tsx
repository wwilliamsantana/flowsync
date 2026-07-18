import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowsync.vercel.app"),
  title: {
    default: "FlowSync | Modern Project Management for Teams",
    template: "%s | FlowSync",
  },
  description:
    "FlowSync is a modern SaaS platform that helps teams manage projects, collaborate efficiently and deliver faster.",
  keywords: [
    "Project Management",
    "SaaS",
    "Workflow",
    "Team Collaboration",
    "Productivity",
    "Dashboard",
    "Next.js",
    "React",
    "Task Management",
  ],
  authors: [
    {
      name: "William Santana",
    },
  ],
  creator: "William Santana",
  publisher: "FlowSync",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-screen bg-zinc-900 text-white">{children}</body>
    </html>
  );
}
