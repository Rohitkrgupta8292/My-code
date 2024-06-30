import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around gap-7 px-2 bg-blue-700 text-white py-4"> 
      <div className="logo font-bold"><Link href="/">Facebook</Link></div>
      <ul className="flex gap-6">
        <Link className="text-lg mx-2" href="/"><li>Home</li></Link>
        <Link className="text-lg mx-2" href="/about"><li>About</li></Link>
        <Link className="text-lg mx-2" href="/contact"><li>contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;