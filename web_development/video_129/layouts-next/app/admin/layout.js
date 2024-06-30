import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: Facebook - Connect with yout friends and the world around you",
  description:
    "Admin Page: Facebook is a socail utility that connects people with friends and others who work, study, and live around them, People use Facebook to keep up with friends, upload an unlimited number of photos, post, videos, and learn more about the people they meet.",
};

export default function AdminLayout({ children }) {
  return(
     <>
     <span>Admin Nabvar</span>
     {children}
     </>
  )
}
