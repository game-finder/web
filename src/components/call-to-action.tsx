import Link from "next/link";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <div className="flex items-center justify-center gap-sm">
      <Button asChild variant="outline">
        <Link
          suppressHydrationWarning
          href={process.env.DISCORD_SERVER_URL || ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
        </Link>
      </Button>
      <Button asChild>
        <Link href="#waitlist">Join Waitlist</Link>
      </Button>
    </div>
  );
}
