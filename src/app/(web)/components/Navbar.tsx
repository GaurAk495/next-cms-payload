"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LANGUAGES } from "../locales/getData";
import { Navbar } from "@/app/payload-types";

function NavBar({ lang, data }: { lang: string; data: Navbar }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 z-20 w-full border-b border-surface-border bg-background-dark/80 backdrop-blur-md px-6 py-4 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href={"/" + lang}
            className="flex gap-1 items-stretch text-white"
          >
            <Image src="/comp_logo.png" alt="Logo" width={32} height={32} />
            <div className="w-px border  border-white/10" />
            <h2 className="place-content-center text-xl font-bold leading-tight tracking-tight">
              Nexus CMS
            </h2>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {data?.navItems?.map((item) => {
              const isActive = pathname === "/" + lang + item.href;

              return (
                <Link
                  key={item.id}
                  href={`/${lang}${item.href}`}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button className="hidden sm:flex h-10 items-center justify-center rounded-full px-5 text-sm font-bold text-white hover:bg-surface-border transition-colors">
              {data?.buttons?.[0]?.label}
            </button>
            <button className="flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-black/80 shadow-[0_0_15px_rgba(43,238,121,0.3)] hover:shadow-[0_0_25px_rgba(43,238,121,0.5)] transition-all">
              {data?.buttons?.[1]?.label}
            </button>
            <button
              className="block sm:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <MobileSidebar
        open={open}
        setOpen={setOpen}
        navItems={data.navItems!}
        lang={lang}
      />
    </>
  );
}

type NavItem = { href: string; label: string };

function MobileSidebar({
  open,
  setOpen,
  navItems,
  lang,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  navItems: NavItem[];
  lang: string;
}) {
  const pathname = usePathname();

  // lock body scroll when sidebar open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        aria-hidden={!open}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 z-40 h-screen w-72 max-w-[80%] bg-surface-dark/99 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* header with close */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-surface-border">
            <div className="text-lg font-semibold text-white">Menu</div>
            <button
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setOpen(false)}
            >
              {/* simple X icon */}
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>
          </div>

          {/* nav */}
          <nav className="flex-1 overflow-auto px-4 py-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  pathname === `/${lang}${item.href}` || pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link href={`/${lang}${item.href}`}>
                      <div
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-lg font-medium transition-colors duration-150 ${
                          isActive
                            ? "text-primary bg-white/5"
                            : "text-white hover:text-primary hover:bg-white/3"
                        }`}
                      >
                        {item.label}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* divider */}
            <div className="my-4 h-px bg-surface-border" />

            {/* mobile language selector (compact) */}
            <div className="px-1">
              <LanguageSelector mobile />
            </div>
          </nav>

          {/* optional footer (e.g., legal links) */}
          <div className="px-4 py-4 border-t border-surface-border text-sm text-text-subtle">
            <Link href={`/${lang}/privacy`}>
              <div
                onClick={() => setOpen(false)}
                className="block py-1 hover:text-white"
              >
                Privacy
              </div>
            </Link>
            <Link href={`/${lang}/terms`}>
              <div
                onClick={() => setOpen(false)}
                className="block py-1 hover:text-white"
              >
                Terms
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function LanguageSelector({ mobile }: { mobile?: boolean }) {
  const { lang } = useParams() as { lang?: string };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname() || "/";

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  // Create a path replacement helper so clicking language doesn't lose rest of path.
  const replaceLangInPath = (newCode: string) => {
    const parts = pathname.split("/");
    // if first segment is empty string (leading slash), parts[1] is the lang in your app structure
    if (parts[1] && LANGUAGES.some((l) => l.code === parts[1])) {
      parts[1] = newCode;
    } else {
      // no lang in path — insert after leading slash
      parts.splice(1, 0, newCode);
    }
    return parts.join("/") || `/${newCode}`;
  };

  if (mobile) {
    // compact / mobile rendering (full width)
    return (
      <div ref={containerRef} className="w-full">
        <div
          onClick={() => setDropdownOpen((v) => !v)}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg border border-surface-border hover:bg-white/3 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            {/* Globe icon */}
            <svg
              className="w-5 h-5 text-text-subtle"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
              <path
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12h20M12 2c2.5 4 2.5 12 0 16M12 2C9.5 6 9.5 18 12 22"
              />
            </svg>

            <div>
              <div className="text-sm font-medium text-white">
                {current.name}
              </div>
              <div className="text-xs text-text-subtle">Language</div>
            </div>
          </div>

          {/* Chevron */}
          <svg
            className={`w-4 h-4 transition-transform ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>

        <ul
          role="listbox"
          className={`mt-2 w-full overflow-hidden rounded-lg border border-surface-border bg-surface-dark shadow-sm ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          {LANGUAGES.map((language) => (
            <li key={language.code}>
              <Link href={replaceLangInPath(language.code)}>
                <div
                  onClick={() => setDropdownOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium text-text-subtle hover:bg-white/5 ${
                    language.code === lang ? "bg-white/5 text-white" : ""
                  }`}
                  role="option"
                  aria-selected={language.code === lang}
                >
                  {language.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // desktop / header usage (your original style - visible on sm+)
  return (
    <div className="hidden sm:block relative" ref={containerRef}>
      <div
        className="hover:bg-surface-border w-full p-2 rounded-xl flex items-center gap-2 cursor-pointer"
        onClick={() => setDropdownOpen((v) => !v)}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        {/* Globe */}
        <svg
          className="w-5 h-5 text-text-subtle"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2c2.5 4 2.5 12 0 16M12 2C9.5 6 9.5 18 12 22"
          />
        </svg>
        <span className="text-sm font-medium text-text-subtle">
          {current.name}
        </span>
        {/* Chevron */}
        <svg
          className="w-5 h-5 text-text-subtle"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9l6 6 6-6"
          />
        </svg>
      </div>

      <ul
        className={`absolute top-full mt-2 right-0 z-10 w-full bg-surface-dark overflow-hidden border border-surface-border rounded-xl shadow-lg ${
          dropdownOpen ? "block" : "hidden"
        }`}
        role="listbox"
      >
        {LANGUAGES.map((language) => (
          <li key={language.code}>
            <Link href={replaceLangInPath(language.code)}>
              <div
                className={`text-sm px-4 py-2 font-medium text-text-subtle hover:bg-white/5 duration-100 block ${
                  language.code === lang ? "bg-white/5 text-white" : ""
                }`}
                role="option"
                aria-selected={lang === language.code}
                onClick={() => setDropdownOpen(false)}
              >
                {language.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
