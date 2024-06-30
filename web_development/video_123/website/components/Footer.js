import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-around bg-slate-800 text-white py-4 absolute bottom-0 w-full h-[50px] text-center">
      <div className="text-center text-xs">Copyright © Facebook | All rights reserved</div>
      <ul className="flex gap-2">
        <Link href="/"><li className="text-xs underline">Home</li></Link>
        <Link href="/about"><li className="text-xs underline">About</li></Link>
        <Link href="/contact"><li className="text-xs underline">Contact</li></Link>
      </ul>
    </footer>
  );
};

export default Footer;
