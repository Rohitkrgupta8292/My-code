import { Inter } from "next/font/google";
import "./globals.css";
import Nabvar from "@/components/Nabvar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "A blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nabvar/>
        {children}</body>
    </html>
  );
}
