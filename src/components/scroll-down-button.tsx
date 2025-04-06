"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ScrollDownButton({ target }: { target: string }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce"
      title="Scroll down"
      onClick={() => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
      asChild
    >
      <Link href={`#${target}`}>
        <ChevronDown />
      </Link>
    </Button>
  );
}
