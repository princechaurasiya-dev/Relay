"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowUpRightFromSquare } from "lucide-react";

import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 w-full border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Relay home"
        >
          <div className="grid size-9 grid-cols-2 gap-0.75 rounded-lg border border-border p-1.5">
            <span className="rounded-0.5 bg-primary" />
            <span className="rounded-0.5 bg-secondary" />
            <span className="rounded-0.5 bg-secondary" />
            <span className="rounded-0.5 bg-accent" />
          </div>

          <span className="font-display text-[25px] font-semibold tracking-tight text-text-primary">
            relay<span className="text-secondary">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowUpRight size={15} />}
              >
                Get started
              </Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex size-10 items-center justify-center rounded-lg border border-border text-text-primary transition-colors hover:bg-surface-hover md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-border bg-background shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible max-h-125 opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={`flex items-center justify-between py-4 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary ${
                index !== navLinks.length - 1
                  ? "border-b border-border-subtle"
                  : ""
              }`}
            >
              {link.label}
              <ArrowUpRightFromSquare size={14} className="opacity-40" />
            </Link>
          ))}

          <div className="mt-5 flex flex-col gap-3">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="outline" fullWidth onClick={closeMenu}>
                  Login
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button
                  variant="primary"
                  fullWidth
                  rightIcon={<ArrowUpRight size={15} />}
                  onClick={closeMenu}
                >
                  Get started
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <div className="flex items-center gap-3 py-2">
                <UserButton />
                <span className="text-sm text-text-secondary">
                  Your account
                </span>
              </div>
            </Show>
          </div>
        </nav>
      </div>
    </header>
  );
}
