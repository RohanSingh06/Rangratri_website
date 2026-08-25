"use client";

/*
===========================================================
RANGRATRI EVENTS — NAVBAR
Step 13 — Mobile refinement
Iteration: Mobile menu reliability

Purpose:
- Responsive desktop + mobile navigation.
- Reliable hamburger interaction on mobile browsers.
- Fixed mobile menu positioning.
- Prevent background scrolling while menu is open.
- Preserve existing Rangratri visual language.
===========================================================
*/

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { brand } from "@/data/brand";
import { site } from "@/data/site";

/*
-----------------------------------------------------------
INSTAGRAM ICON
-----------------------------------------------------------
Using a local SVG avoids requiring an Instagram icon
package and keeps the navbar lightweight.
-----------------------------------------------------------
*/

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /*
  ---------------------------------------------------------
  BODY SCROLL LOCK
  ---------------------------------------------------------
  When the mobile menu is open, prevent the page behind it
  from scrolling.
  ---------------------------------------------------------
  */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
  ---------------------------------------------------------
  CLOSE MENU WHEN ESC IS PRESSED
  ---------------------------------------------------------
  ---------------------------------------------------------
  */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /*
  ---------------------------------------------------------
  CLOSE MENU WHEN NAVIGATION ITEM IS SELECTED
  ---------------------------------------------------------
  ---------------------------------------------------------
  */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* =================================================
          NAVBAR BAR
          ================================================= */}
      <div className="border-b border-[rgba(214,165,45,0.18)] bg-[#08030f]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-[calc(100%-2rem)] max-w-[1200px] items-center justify-between md:w-[calc(100%-4rem)]">
          {/* =================================================
              LOGO
              ================================================= */}
          <Link
            href="/"
            aria-label={`${brand.name} home`}
            className="relative z-[110] flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <Image
              src="/assets/brand/Rangratri_Events_logo.png"
              alt="Rangratri Events"
              width={150}
              height={55}
              priority
              className="h-auto w-[105px] object-contain sm:w-[120px]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}
          <nav className="hidden items-center gap-7 lg:flex">
            {site.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[rgba(255,245,221,0.78)] transition-colors duration-300 hover:text-[#f4d47a]"
              >
                {item.label}

                <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[#e4b84a] to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* =================================================
              DESKTOP RIGHT SIDE
              ================================================= */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Rangratri Events on Instagram"
              className="flex h-10 w-10 items-center justify-center border border-[rgba(214,165,45,0.3)] bg-white/[0.02] text-[#f4d47a] transition-all duration-300 hover:border-[rgba(228,184,74,0.7)] hover:bg-[#d6a52d]/10 hover:shadow-[0_0_24px_rgba(214,165,45,0.12)]"
            >
              <InstagramIcon size={16} />
            </a>

            <Link
              href="/contact"
              className="rr-button rr-button-primary min-h-[42px] px-5 text-[10px]"
            >
              Contact Us
              <ArrowUpRight
                size={14}
                strokeWidth={2}
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
              ================================================= */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[110] flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center border border-[rgba(214,165,45,0.3)] bg-[#10061c] text-[#f4d47a] transition-colors duration-200 hover:border-[rgba(228,184,74,0.7)] lg:hidden"
          >
            {menuOpen ? (
              <X
                size={20}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>
      </div>

      {/* =================================================
          MOBILE BACKDROP
          ================================================= */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        className={`fixed inset-0 top-[76px] z-[90] bg-black/55 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =================================================
          MOBILE MENU
          ================================================= */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[76px] z-[100] border-b border-[rgba(214,165,45,0.18)] bg-[#0d0518]/98 shadow-[0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto max-h-[calc(100vh-76px)] w-[calc(100%-2rem)] max-w-[1200px] overflow-y-auto py-5 md:w-[calc(100%-4rem)]">
          <nav className="flex flex-col">
            {site.navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex min-h-[56px] items-center justify-between border-b border-white/[0.06] py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[rgba(255,245,221,0.88)] transition-colors duration-200 hover:text-[#f4d47a] ${
                  index === 0
                    ? "border-t border-white/[0.06]"
                    : ""
                }`}
              >
                <span>{item.label}</span>

                <ArrowUpRight
                  size={14}
                  className="text-[#d6a52d]"
                />
              </Link>
            ))}

            {/* =================================================
                MOBILE ACTIONS
                ================================================= */}
            <div className="mt-8
 flex items-center gap-3 pb-2">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-[rgba(214,165,45,0.3)] text-[#f4d47a]"
                aria-label="View Rangratri Events on Instagram"
              >
                <InstagramIcon size={17} />
              </a>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rr-button rr-button-primary flex-1"
              >
                Contact Us
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}