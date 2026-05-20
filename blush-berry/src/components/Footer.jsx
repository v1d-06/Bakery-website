import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="catering" className="bg-[#f9cbd7] text-[#7A2438]">

      {/* Main Footer */}
      <div className="px-6 sm:px-8 lg:px-16 py-14 lg:py-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-sm">

        {/* Brand */}
        <div className="space-y-4">
          <h4 className="font-serif text-2xl font-bold">
            Blush & Butter
          </h4>

          <p className="text-[#7A2438]/70 font-light leading-relaxed max-w-xs">
            Artisan patisserie in the heart of Bhopal. Baking since 1987.
          </p>
        </div>

        {/* Menu */}
        <div className="space-y-3">
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-[#7A2438]">
            Menu
          </h5>

          <ul className="space-y-2 text-[#7A2438]/80 font-light">

            <li>
              <Link
                to="/full-menu"
                className="hover:text-[#E8728A] transition-colors"
              >
                Pastries
              </Link>
            </li>

            <li>
              <Link
                to="/full-menu"
                className="hover:text-[#E8728A] transition-colors"
              >
                Cakes
              </Link>
            </li>

            <li>
              <Link
                to="/full-menu"
                className="hover:text-[#E8728A] transition-colors"
              >
                Cupcakes
              </Link>
            </li>

          </ul>
        </div>

        {/* About */}
        <div className="space-y-3">
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-[#7A2438]">
            About Us
          </h5>

          <ul className="space-y-2 text-[#7A2438]/80 font-light">

            <li>
              <Link
                to="/story"
                className="hover:text-[#E8728A] transition-colors"
              >
                Story
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#E8728A] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-3">
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-[#7A2438]">
            Follow
          </h5>

          <ul className="space-y-2 text-[#7A2438]/80 font-light">

            <li>
              <a
                href="#"
                className="hover:text-[#E8728A] transition-colors"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-[#E8728A] transition-colors"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-[#E8728A] transition-colors"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center px-4 py-5 text-[11px] sm:text-xs bg-[#4e1623] text-[#FFF0F3]/60 border-t border-[#F5CCDA]/40 leading-relaxed">
        © {new Date().getFullYear()} Blush & Butter Patisserie ·
        Bhopal, Madhya Pradesh. All Rights Reserved.
      </div>
    </footer>
  );
}