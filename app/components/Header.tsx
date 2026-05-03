"use client";

import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NAV_LINKS, SITE_NAME } from "@/app/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  // Split links to balance the left and right sides
  const leftLinks = NAV_LINKS.slice(0, 4);
  const rightLinks = NAV_LINKS.slice(4);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Background layer with unified drop shadow for seamless curve */}
      <div className="absolute inset-x-0 top-0 -z-10 pointer-events-none drop-shadow-md">
        {/* Thin navbar bar */}
        <div className="absolute inset-x-0 top-0 h-16 bg-white" />
        {/* Seamless curved area */}
        <div className="absolute left-1/2 top-0 h-[100px] w-[130px] -translate-x-1/2 rounded-b-[3rem] bg-white md:h-[120px] md:w-[160px] md:rounded-b-[3.5rem]" />
      </div>

      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
        
        {/* Mobile Spacer - Left */}
        <div className="flex-1 md:hidden" />
        
        {/* Desktop Nav - Left */}
        <nav className="hidden md:flex items-center justify-start gap-1 lg:gap-2" aria-label="Primary Left">
          {leftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 lg:px-4 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="relative flex h-full shrink-0 items-start justify-center">
          <a
            href="#home"
            className="group absolute top-2.5 z-50 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 md:top-3"
            onClick={() => setOpen(false)}
          >
            {/* Logo image sitting seamlessly inside the background curve */}
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-inner ring-1 ring-slate-100 transition-all duration-300 group-hover:shadow-md md:h-24 md:w-24">
              <img
                src="/h_logo.png"
                alt="Hasthaartha Logo"
                className="h-full w-full object-contain p-1.5"
              />
            </div>
          </a>
        </div>

        {/* Desktop Nav - Right */}
        <nav className="hidden md:flex items-center justify-end gap-1 lg:gap-2" aria-label="Primary Right">
          {rightLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 lg:px-4 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex-1 flex md:hidden justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-slate-50 p-2.5 text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <IoClose className="h-6 w-6" aria-hidden /> : <IoMenu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] border-t border-blue-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-4 shadow-inner">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
