import { Mail } from "lucide-react";
import Link from "next/link";
import { Discord, X } from "./logos";
import { Button } from "./ui/button";

const links: { href: string; label: React.ReactNode }[] = [
  {
    href: "mailto:contact@nicolaspujia.com?subject=Game%20Finder%20-%20Contact",
    label: <Mail />,
  },
  {
    href: "https://discord.gg/sT5E9sTg",
    label: <Discord />,
  },
  {
    href: "https://x.com/nicopujia",
    label: <X />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto p-lg">
        <div className="flex flex-col items-center justify-between gap-lg md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Game Finder. All rights reserved.
            </p>
          </div>
          <div className="flex gap-sm">
            {links.map((link, index) => (
              <Button key={index} variant="ghost" size="sm" asChild>
                <Link target="_blank" href={link.href}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
