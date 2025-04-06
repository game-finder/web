import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import "@fontsource/geist-sans";
import "@fontsource/rajdhani";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Finder - Discover New Games You'll Love",
  description:
    "Find your next favorite game with AI-powered recommendations. Filter by genre, platform, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background font-sans antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
