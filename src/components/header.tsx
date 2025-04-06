"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CallToAction from "./call-to-action";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";

const navigationLinks: { href: string; label: string }[] = [
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/20 border-b"
          : ""
      }`}
    >
      <div className="container mx-auto flex h-lg items-center justify-between px-sm">
        <div className="flex items-center gap-md">
          <Link href="/" className="flex items-center gap-sm">
            <Image
              src="/images/logo-black.webp"
              alt="Game Finder Logo"
              width={32}
              height={32}
              className="block dark:hidden h-full"
            />
            <Image
              src="/images/logo-white.webp"
              alt="Game Finder Logo"
              width={32}
              height={32}
              className="hidden dark:block h-full"
            />
            <h1 className="font-heading text-xl sm:text-2xl font-bold">
              Game Finder
            </h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Button variant="ghost" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-sm">
          <div className="hidden md:block">
            <CallToAction />
          </div>
          <div className="flex items-center gap-sm">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden space-y-md py-md">
          <nav className="container mx-auto max-w-7xl px-sm text-center">
            <ul className="flex flex-col items-center">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => setIsMenuOpen(false)}
                    asChild
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <CallToAction />
        </div>
      )}
    </header>
  );
}
