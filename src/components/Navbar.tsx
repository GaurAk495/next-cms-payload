"use client";

import { LANGUAGES } from "@/app/locales/getData";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Features", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "#" },
];

function NavBar({ lang }: { lang: string }) {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-border bg-background-dark/80 backdrop-blur-md px-6 py-4 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href={"/" + lang} className="flex gap-1 items-stretch text-white">
          <Image src="/comp_logo.png" alt="Logo" width={32} height={32} />
          <div className="w-px border  border-white/10" />
          <h2 className="place-content-center text-xl font-bold leading-tight tracking-tight">
            Nexus CMS
          </h2>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
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
            Log In
          </button>
          <button className="flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-black/80 shadow-[0_0_15px_rgba(43,238,121,0.3)] hover:shadow-[0_0_25px_rgba(43,238,121,0.5)] transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

function LanguageSelector() {
  const { lang } = useParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
      if (e.key === "Escape") {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const language = LANGUAGES.find((language) => language.code === lang);
  return (
    <div className="relative" ref={containerRef}>
      <div
        className="hover:bg-surface-border w-full p-2 rounded-xl flex items-center gap-2 cursor-pointer"
        onClick={() => setDropdownOpen((v) => !v)}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <Globe className="size-6 text-text-subtle" />
        <span className="text-sm font-medium text-text-subtle">
          {language?.name}
        </span>
        <ChevronDown className="size-6 text-text-subtle" />
      </div>

      <ul
        className={`absolute top-full mt-2 right-0 z-10 w-full bg-surface-dark overflow-hidden border border-surface-border rounded-xl shadow-lg ${
          dropdownOpen ? "block" : "hidden"
        }`}
        role="listbox"
      >
        {LANGUAGES.map((language) => (
          <Link
            key={language.code}
            href={pathname.replace(pathname.split("/")[1], language.code)}
          >
            <li
              className="text-sm px-4 py-2 font-medium text-text-subtle hover:bg-white/5 duration-100 cursor-pointer"
              role="option"
              aria-selected={lang === language.code}
            >
              {language.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
