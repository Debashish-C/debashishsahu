import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debashish Sahu - Software Engineer & Full Stack Developer",
  description: "Building scalable, user-focused web applications. MCA student at NIT Bhopal passionate about full-stack development and startups.",
  keywords: ["Debashish Sahu", "Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "NIT Bhopal"],
  authors: [{ name: "Debashish Sahu" }],
  openGraph: {
    title: "Debashish Sahu - Software Engineer & Full Stack Developer",
    description: "Building scalable, user-focused web applications. MCA student at NIT Bhopal.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debashish Sahu - Software Engineer & Full Stack Developer",
    description: "Building scalable, user-focused web applications. MCA student at NIT Bhopal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
