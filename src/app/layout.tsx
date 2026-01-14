import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Using system fonts to avoid network issues during build
const geistSans = {
  variable: "--font-geist-sans",
  className: "",
};

const geistMono = {
  variable: "--font-geist-mono",
  className: "",
};

export const metadata: Metadata = {
  title: "Debashish Sahu - Software Engineer | Full Stack Developer | NIT Bhopal MCA Student",
  description: "Debashish Sahu - Passionate software engineer and full-stack developer. MCA student at NIT Bhopal building scalable web applications with React, Next.js, TypeScript. Portfolio showcasing projects, skills, and expertise in modern web development.",
  keywords: [
    "Debashish Sahu",
    "Debashish",
    "Sahu",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "NIT Bhopal",
    "MCA Student",
    "Portfolio",
    "Software Developer India",
    "Full Stack Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Web Applications",
    "Software Projects"
  ],
  authors: [{ name: "Debashish Sahu" }],
  creator: "Debashish Sahu",
  publisher: "Debashish Sahu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://debashishsahu.in'), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Debashish Sahu - Software Engineer & Full Stack Developer",
    description: "Debashish Sahu - MCA student at NIT Bhopal. Passionate full-stack developer building scalable web applications with React, Next.js, and TypeScript. Explore my portfolio and projects.",
    url: "https://debashishsahu.in", // Update this with your actual domain
    siteName: "Debashish Sahu Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Debashish Sahu - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debashish Sahu - Software Engineer & Full Stack Developer",
    description: "MCA student at NIT Bhopal building scalable web applications. Explore my portfolio showcasing React, Next.js, and TypeScript projects.",
    creator: "@debashishsahu", // Update with your Twitter handle if you have one
    images: ["/og-image.jpg"], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Debashish Sahu",
              "alternateName": "Debashish",
              "jobTitle": "Software Engineer",
              "description": "Full-stack developer and MCA student at NIT Bhopal specializing in React, Next.js, and TypeScript",
              "url": "https://debashishsahu.in",
              "sameAs": [
                "https://github.com/Debashish-C", // Update with your actual GitHub
                "https://linkedin.com/in/debashishtest", // Update with your actual LinkedIn
                "https://twitter.com/its_developer" // Update with your actual Twitter
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "National Institute of Technology Bhopal",
                "alternateName": "NIT Bhopal"
              },
              "knowsAbout": [
                "Full Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Web Development",
                "Software Engineering",
                "Computer Applications"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Engineer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                }
              }
            })
          }}
        />
      </head>
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
