import type { Metadata } from "next";
import { BJCree, Elms_Sans } from "next/font/google";
import PageBackground from "@/components/bg";
import "./globals.css";

const bjCree = BJCree({
  variable: "--font-bjcree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const elmsSans = Elms_Sans({
  variable: "--font-elms-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Relay — Build. Deploy. Scale.",
  description: "A modern developer platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bjCree.variable} ${elmsSans.variable} h-full antialiased`}
    >
      <body className="relative isolate min-h-full overflow-x-hidden font-sans">
        <PageBackground />

        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
