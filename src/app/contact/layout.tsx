import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Debashish Sahu",
  description: "Get in touch with Debashish Sahu. Send a message, connect on social media, or schedule a call.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}