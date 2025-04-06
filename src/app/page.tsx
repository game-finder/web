import CallToAction from "@/components/call-to-action";
import ScrollDownButton from "@/components/scroll-down-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Section,
  SectionDescription,
  SectionHeading,
} from "@/components/ui/section";
import WaitlistForm from "@/components/waitlist-form";
import Image from "next/image";
import Link from "next/link";

const features: { title: string; description: string }[] = [
  {
    title: "🔍 Extremely Detailed Search",
    description:
      "Filter by genre, platform, release date, devs, and more. Or just say something like 'I want a relaxing open-world game like Zelda with crafting.' We'll handle the rest.",
  },
  {
    title: "🤖 Smart Recommendations",
    description:
      "Like Spotify — but for games. The more you use it, the better it gets at picking what you'll love.",
  },
  {
    title: "🎯 Actually Similar Games",
    description:
      "Not just 'other games in the same genre.' We look at gameplay mechanics, pacing, art style, mood — the real deal.",
  },
];

const faq: {
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
}[] = [
  {
    question: "Is it available right now?",
    answer: (
      <span>
        Not yet! We are building the app. You can follow the progress and get
        early access by joining the{" "}
        <Link
          className="link"
          target="_blank"
          href={process.env.DISCORD_SERVER_URL || ""}
        >
          Discord server
        </Link>{" "}
        or{" "}
        <Link className="link" href="#waitlist">
          waiting list
        </Link>
        , or following the developer on{" "}
        <Link className="link" target="_blank" href="https://x.com/nicopujia">
          X
        </Link>
        .
      </span>
    ),
  },
  {
    question: (
      <span>
        What happened to the{" "}
        <Link
          className="link"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.nicopujia.gamefinder"
        >
          current Android app
        </Link>
        ?
      </span>
    ),
    answer:
      "It was built two years ago as an MVP. It still works, but it's ugly and lacks features. A new AI-powered version with a better UX is on the way.",
  },
  {
    question: "What platforms will it support? And how many games?",
    answer:
      "More than 250k games from all platforms — PC, PlayStation, Xbox, Nintendo, mobile, and even retro stuff.",
  },
  {
    question: "How will the recommendations work?",
    answer:
      "We'll use a custom AI model trained on your likes, dislikes, and more.",
  },
  {
    question: "Will I need an account?",
    answer:
      "Only if you want personalized recommendations. Otherwise, you'll be able to browse freely.",
  },
  {
    question: "Will it be free?",
    answer:
      "Yes, but some features will be paid or have ads because they're resource-heavy.",
  },
  {
    question: "What benefits will I get from joining the waitlist?",
    answer:
      "You'll be able to test the app before it's released, have a discount for the pro plan when it launches, and provide feedback directly to the developer.",
  },

  {
    question: "Who's behind this?",
    answer: (
      <span>
        Hi, I'm{" "}
        <Link
          target="_blank"
          href="https://nicolaspujia.com/about"
          className="link"
        >
          Nicolás Pujia
        </Link>
        , the main developer of Game Finder. I've been playing video games since
        I have memory and made my{" "}
        <Link
          className="link"
          href="https://nicolaspujia.com/portfolio/games/save-the-fish"
        >
          first game
        </Link>{" "}
        when I was 13. This is an app for gamers by gamers.
      </span>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Section height="screen">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <Image
            src="/images/bored-gamer.webp"
            alt="Bored gamer"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <SectionHeading size="lg">
          Don't know <span className="text-primary">what to play</span>?
        </SectionHeading>
        <SectionDescription>
          You've beaten the final boss. Now you're bored.
          <br />
          <span className="text-foreground">
            Discover new games you'll <span className="font-bold">love</span>{" "}
            playing with <strong className="text-primary">Game Finder</strong>
          </span>
        </SectionDescription>
        <CallToAction />
        <ScrollDownButton target="features" />
      </Section>

      <Section id="features" variant="highlight">
        <SectionHeading>
          <span className="text-primary">Never</span> Wonder What To Play{" "}
          <span className="text-primary">Again</span>
        </SectionHeading>
        <div className="grid gap-md sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
              <CardHeader>
                <CardTitle className="font-heading">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <CallToAction />
      </Section>

      <Section id="faq">
        <SectionHeading>
          Frequently Asked <span className="text-primary">Questions</span>
        </SectionHeading>
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-prose w-full"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <CallToAction />
      </Section>

      <Section id="waitlist" variant="highlight">
        <SectionHeading>
          <span className="text-primary">Be Part</span> of the Launch
        </SectionHeading>
        <SectionDescription>
          We're building this app for gamers like you.
          <br />
          Your feedback can shape how it works.
        </SectionDescription>
        <WaitlistForm />
      </Section>
    </>
  );
}
