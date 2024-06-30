import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect with yout friends and the world around you",
  description: "Facebook is a socail utility that connects people with friends and others who work, study, and live around them, People use Facebook to keep up with friends, upload an unlimited number of photos, post, videos, and learn more about the people they meet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
