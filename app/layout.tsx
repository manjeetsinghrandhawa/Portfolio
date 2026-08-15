import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manjeet Singh | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and cloud technologies. Currently building production-grade web applications at Absolute Web Pvt Ltd. View projects, experience, and get in touch.",
  icons: {
    icon: "/assets/manjeetphotoedited.jpg",
  },
  openGraph: {
    title: "Manjeet Singh | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications with Next.js, React, Node.js, and cloud technologies.",
    type: "website",
  },
  keywords: [
    "Manjeet Singh",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "TypeScript",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
