"use client";
import React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false);
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center h-[70px] px-4 lg:justify-around">
      <div className="logo font-bold text-lg ">
        <Link className="flex items-center justify-center" href={"/"}>
          <span className="mt-2">GetMeAChai</span>
        <img width={30} src="tea.gif" alt="tea" />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="relative">
          {session && (
            <>
              <button
                onClick={() => setshowdropdown(!showdropdown)} onBlur={()=> 
                  {setTimeout(() => {
                    setshowdropdown(false)
                  }, 250);}}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Hi! {session.user.name}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  showdropdown ? "" : "hidden"
                } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 right-0`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href={"/dashboard"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.username}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                     Your Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => signOut()}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      log out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        {/* {session && (
          <button
            onClick={() => signOut()}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Logout
          </button>
        )} */}
        {!session && (
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
