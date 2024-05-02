"use client";
import Link from "next/link";
import { useState } from "react";

export const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header id="MobileHeaderInternal" className="sticky top-11 z-30">
        <button
          onClick={toggleMenu}
          id="NavMobileToggle"
          className="block lg:hidden focus:ring-2 p-1"
          aria-label="Open menu"
          style={{
            backgroundColor: "white",
            width: "100%",
            textAlign: "left"
          }}
        >
          <span style={{ fontSize: "30px" }}>{menuOpen ? "✕" : "☰"}</span>
        </button>

        <div
          id="NavInternalContainer"
          className={`lg:block ${menuOpen ? "block" : "hidden"}`}
        >
          <nav className="NavInternal" aria-label="Main">
            <div className="w-full relative lg:shadow-lg z-20 bg-white">
              <div className="lg:container mx-auto lg:flex justify-between">
                <ul className="top-level lg:flex flex-nowrap lg:overflow-x-auto pt-6 lg:pt-0">
                  <li className="">
                    <Link href="/" className="block" onClick={closeMenu}>
                      <span className="inline-block" data-text="Home">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/AboutUs" className="block" onClick={closeMenu}>
                      <span
                        className="inline-block text-gray-mid"
                        data-text="About Us"
                      >
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/FAQ" className="block" onClick={closeMenu}>
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Questions"
                      >
                        Questions
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ContactUs"
                      className="block"
                      onClick={closeMenu}
                    >
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Contact Us"
                      >
                        Contact
                      </span>
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      href="/Explore"
                      className="block"
                      onClick={closeMenu}
                    >
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Contact Us"
                      >
                        Dashboard
                      </span>
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      href="/Dashboard/Admin"
                      className="block"
                      onClick={closeMenu}
                    >
                      <span
                        className="inline-block text-gray-mid"
                        data-text="Contact Us"
                      >
                        Admin
                      </span>
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            id="NavBgOverlay"
            //className={`fixed z-0 inset-0 ${menuOpen ? "block" : "hidden"}`}
          ></div>
        </div>
      </header>
    </>
  );
};