"use client";

import { usePathname } from "next/navigation";

const themes = {
  default: {
    primary: "rgba(172, 105, 63, 0.13)",
    secondary: "rgba(120, 128, 90, 0.12)",
    tertiary: "rgba(75, 45, 27, 0.06)",
  },
  auth: {
    primary: "rgba(120, 128, 90, 0.14)",
    secondary: "rgba(172, 105, 63, 0.10)",
    tertiary: "rgba(120, 128, 90, 0.07)",
  },
  logout: {
    primary: "rgba(190, 76, 65, 0.15)",
    secondary: "rgba(172, 105, 63, 0.12)",
    tertiary: "rgba(125, 45, 40, 0.06)",
  },
  dashboard: {
    primary: "rgba(120, 128, 90, 0.13)",
    secondary: "rgba(172, 105, 63, 0.08)",
    tertiary: "rgba(75, 45, 27, 0.05)",
  },
  billing: {
    primary: "rgba(193, 148, 73, 0.15)",
    secondary: "rgba(172, 105, 63, 0.10)",
    tertiary: "rgba(120, 128, 90, 0.06)",
  },
  settings: {
    primary: "rgba(128, 110, 91, 0.10)",
    secondary: "rgba(172, 105, 63, 0.07)",
    tertiary: "rgba(75, 45, 27, 0.04)",
  },
};

export default function PageBackground() {
  const pathname = usePathname();

  const theme =
    pathname === "/logout"
      ? themes.logout
      : pathname.startsWith("/login") || pathname.startsWith("/signup")
        ? themes.auth
        : pathname.startsWith("/dashboard")
          ? themes.dashboard
          : pathname.startsWith("/billing")
            ? themes.billing
            : pathname.startsWith("/settings")
              ? themes.settings
              : themes.default;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#F5EBDD]"
    >
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 10%, ${theme.primary}, transparent 45%),
            radial-gradient(ellipse at 90% 25%, ${theme.secondary}, transparent 40%),
            radial-gradient(ellipse at 50% 100%, ${theme.tertiary}, transparent 50%)
          `,
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -left-40 -top-40 size-[500px] rounded-full blur-[110px] transition-colors duration-1000 animate-[ambient-float_18s_ease-in-out_infinite]"
        style={{ backgroundColor: theme.primary }}
      />

      <div
        className="absolute -right-40 top-[30%] size-[450px] rounded-full blur-[120px] transition-colors duration-1000 animate-[ambient-float_22s_ease-in-out_infinite_reverse]"
        style={{ backgroundColor: theme.secondary }}
      />

      <div
        className="absolute -bottom-60 left-[30%] size-[500px] rounded-full blur-[130px] transition-colors duration-1000 animate-[ambient-float_25s_ease-in-out_infinite]"
        style={{ backgroundColor: theme.tertiary }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(75,45,27,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(75,45,27,0.08) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EBDD]/10 via-transparent to-[#F5EBDD]/30" />
    </div>
  );
}
