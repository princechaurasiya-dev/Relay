import type { Metadata } from "next";
import { BJCree, Elms_Sans } from "next/font/google";
import PageBackground from "@/components/bg";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
    <ClerkProvider
      appearance={{
        variables: {
          colorBackground: "var(--background)",
          colorForeground: "var(--text-primary)",
          colorPrimary: "var(--primary)",
          colorPrimaryForeground: "var(--primary-foreground)",
          colorInput: "var(--surface-secondary)",
          colorInputForeground: "var(--text-primary)",
          colorBorder: "var(--border)",
          colorMuted: "var(--background-secondary)",
          colorMutedForeground: "var(--text-secondary)",
          colorNeutral: "var(--border)",
          colorRing: "var(--border-focus)",
          colorDanger: "var(--danger)",
          colorModalBackdrop: "rgba(48, 33, 22, 0.55)",
          fontFamily: "var(--font-elms-sans)",
          fontFamilyButtons: "var(--font-elms-sans)",
          borderRadius: "0.75rem",
        },
        cssLayerName: "clerk",
        options: {
          socialButtonsVariant: "blockButton",
        },
        elements: {
          formFieldInput: {
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface-secondary)",
            boxShadow: "none",
            "&:focus": {
              borderColor: "var(--border-focus)",
              boxShadow: "0 0 0 1px var(--border-focus)",
            },
          },

          socialButtonsBlockButton: {
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
            color: "var(--text-primary)",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "var(--surface-hover)",
              borderColor: "var(--border-secondary)",
            },
          },

          socialButtonsBlockButtonText: {
            color: "var(--text-primary)",
            fontWeight: 500,
          },
        },
      }}
    >
      <html
        lang="en"
        className={`${bjCree.variable} ${elmsSans.variable} h-full antialiased`}
      >
        <body className="relative isolate min-h-full overflow-x-hidden font-sans">
          <Navbar />
          <PageBackground />

          <div className="relative z-10 flex min-h-full flex-col">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
