import React, { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper styles to maintain uniformity and render active states dynamically
  const getNavClasses = (isActive) =>
    `relative text-[11px] lg:text-xs font-semibold tracking-[0.28em] uppercase transition-all duration-300 ` +
    `after:absolute after:left-0 after:-bottom-2 after:h-[1.5px] after:bg-[#E8728A] after:transition-all after:duration-300 ` +
    `${isActive 
      ? "text-[#E8728A] after:w-full" 
      : "text-[#7A2438] hover:text-[#E8728A] after:w-0 hover:after:w-full"
    }`;

  const getMobileClasses = (isActive) =>
    `text-sm font-semibold tracking-[0.2em] uppercase rounded transition-all duration-300 ` +
    `${isActive 
      ? "text-[#E8728A] bg-[#fad0db]/40 p-3 block" 
      : "text-[#7A2438] hover:text-[#E8728A] hover:bg-[#fad0db] hover:p-3"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF0F3]/95 backdrop-blur-xl border-b border-[#F5CCDA] shadow-[0_4px_20px_rgba(122,36,56,0.05)]">

      {/* Main Wrapper */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28">

        {/* Navbar Container */}
        <div className="flex items-center justify-between h-[88px] lg:h-[100px]">

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-wide text-[#7A2438] transition-all duration-300 hover:opacity-90"
          >
            Blush{" "}
            <span className="italic font-normal text-[#E8728A]">
              &
            </span>{" "}
            Butter
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-14">

            {/* HOME */}
            <NavLink
              to="/"
              end
              className={({ isActive }) => getNavClasses(isActive && location.hash === "")}
            >
              Home
            </NavLink>

            {/* MENU */}
            <NavLink
              to="/full-menu"
              className={({ isActive }) => getNavClasses(isActive)}
            >
              Menu
            </NavLink>

            {/* STORY */}
             <NavLink
              to="/story"
              className={({ isActive }) => getNavClasses(isActive)}
            >
              Story
            </NavLink>

            {/* CONTACT */}
             <NavLink
              to="/contact"
              className={({ isActive }) => getNavClasses(isActive)}
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate("/full-menu")}
              className="bg-[#E8728A] text-white text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] px-7 lg:px-9 py-3.5 rounded-full hover:bg-[#d95f79] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#E8728A]/25"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#FFE8EE] border border-[#F5CCDA] shadow-sm text-[#7A2438] transition-all duration-300 hover:bg-[#FFE4EA]"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6">

          {/* Mobile Menu Card */}
          <div className="bg-[#FFE8EE] border border-[#F5CCDA] rounded-[28px] shadow-xl px-6 py-7 mt-2">

            <div className="flex flex-col space-y-6">

              {/* HOME */}
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => getMobileClasses(isActive && location.hash === "")}
              >
                Home
              </NavLink>

              {/* MENU */}
              <NavLink
                to="/full-menu"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => getMobileClasses(isActive)}
              >
                Menu
              </NavLink>

              {/* STORY */}
              <a
                href="#story"
                onClick={() => setIsOpen(false)}
                className={getMobileClasses(location.hash === "#story")}
              >
                Story
              </a>

              {/* Divider */}
              <div className="border-t border-[#F5CCDA]" />

              {/* CTA */}
              <button
                onClick={() => {
                  navigate("/full-menu");
                  setIsOpen(false);
                }}
                className="w-full bg-[#7A2438] text-white text-sm font-semibold uppercase tracking-[0.2em] py-4 rounded-full hover:bg-[#E8728A] hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}