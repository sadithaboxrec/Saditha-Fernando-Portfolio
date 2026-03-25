"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  // Controls mobile menu open/close
  const [open, setOpen] = useState(false);
  // active section tracking
  const [active, setActive] = useState("#home");

  useEffect(() => {
    // Get all section elements from the DOM using their IDs
    const sections = navItems.map((item) =>
        document.querySelector(item.href)
    );

    //  detect which section is in view
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When a section enters the viewport
            if (entry.isIntersecting) {
              // Update active state to match that section's id
              setActive(`#${entry.target.id}`);
            }
          });
        },
        {//Button trigger happening
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0
        }
    );

    // Attach observer to each section
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 w-[92%] max-w-6xl rounded-2xl border border-white/60 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-md relative z-[1000]">

          <div className="flex items-center justify-between">


            <a href="#home" className="text-3xl font-semibold tracking-tight text-slate-900 z-[1000] relative">
              Saditha
            </a>

            {/*  Hamburger Button */}
            <button
                type="button"
                aria-expanded={open}
                className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 md:hidden relative z-[1000]"
                onClick={() => setOpen((prev) => !prev)} // toggle menu
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="mt-1.5 block h-0.5 w-5 bg-current" />
              <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-3 md:flex relative z-[1000] ">
              {navItems.map((item) => {
                // Check if  item is the currently active section
                const isActive = active === item.href;

                return (
                    <li key={item.href}>
                      <a
                          href={item.href}
                          className={`
                      px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                      
                      ${
                              // ACTIVE STYLE (black pill button)
                              isActive
                                  ? "bg-black text-white"
                                  : "text-slate-700 hover:bg-slate-200"
                          }
                    `}
                      >
                        {item.label}
                      </a>
                    </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu  */}
          {open && (
              <ul className="mt-3 space-y-1 border-t border-slate-200 pt-3 md:hidden relative z-[1000] ">
                {navItems.map((item) => {
                  const isActive = active === item.href;

                  return (
                      <li key={item.href}>
                        <a
                            href={item.href}
                            onClick={() => setOpen(false)} // close menu after click
                            className={`
                      block rounded-md px-3 py-2 text-sm font-medium transition
                      
                      ${
                                isActive
                                    ? "bg-black text-white"
                                    : "text-slate-700 hover:bg-slate-100"
                            }
                    `}
                        >
                          {item.label}
                        </a>
                      </li>
                  );
                })}
              </ul>
          )}
        </nav>
      </header>
  );
}