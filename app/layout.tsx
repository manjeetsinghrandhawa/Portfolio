import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manjeet's Portfolio",
  description: "This is Manjeet's Portfolio.",
  icons: {
    icon: "/assets/manjeetphotoedited.jpg",
  },
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
