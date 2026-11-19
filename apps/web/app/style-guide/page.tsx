import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const colors = [
  ["Background", "#F5EBDD"],
  ["Surface", "#FFFCF6"],
  ["Surface Secondary", "#F2E7D8"],
  ["Border", "#DDCEBA"],
  ["Primary", "#4B2D1B"],
  ["Secondary", "#78805A"],
  ["Accent", "#AC693F"],
  ["Muted", "#806E5B"],
  ["Text Primary", "#302116"],
  ["Text Secondary", "#66513E"],
  ["Text Muted", "#B5A38F"],
  ["Disabled", "#E0D6C7"],
];

const radii = [
  ["4px", "Small", "rounded"],
  ["8px", "Default", "rounded-lg"],
  ["12px", "Medium", "rounded-xl"],
  ["16px", "Large", "rounded-2xl"],
  ["24px", "XL", "rounded-3xl"],
  ["9999px", "Full", "rounded-full"],
];

function Leaf({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M34 4C16 5 5 13 5 25c0 6 4 10 10 10C27 35 34 20 34 4Z"
        fill="currentColor"
      />
      <path d="M5 35 26 12" stroke="var(--background)" strokeWidth="1.5" />
    </svg>
  );
}

function Panel({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`min-w-0 rounded-2xl border border-border/60 bg-surface/90 p-4 shadow-[0_4px_18px_rgba(75,45,27,0.04)] ${className}`}
    >
      <h2 className="text-base font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && <p className="mb-4 text-xs text-muted">{subtitle}</p>}
      {children}
    </section>
  );
}

function Badge({
  children,
  color = "neutral",
}: {
  children: ReactNode;
  color?: string;
}) {
  const variants: Record<string, string> = {
    active: "bg-secondary/15 text-secondary",
    pending: "bg-[#FCE8C9] text-[#A45B16]",
    error: "bg-[#FCE0D7] text-[#A63D32]",
    neutral: "bg-surface-secondary text-muted",
  };

  const dots: Record<string, string> = {
    active: "bg-[#526F3B]",
    pending: "bg-[#D98219]",
    error: "bg-[#B34336]",
    neutral: "bg-[#CBB59B]",
  };

  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-medium ${variants[color]}`}
    >
      <span className={`size-2 rounded-full ${dots[color]}`} />
      {children}
    </span>
  );
}

function DashboardPreview() {
  const nav = ["Dashboard", "Projects", "Monitoring", "Billing", "Settings"];
  const icons = ["⌂", "▧", "⌁", "▤", "⚙"];

  return (
    <div className="flex min-h-75 overflow-hidden rounded-xl border border-border bg-background-secondary">
      <aside className="hidden w-32 shrink-0 border-r border-border bg-background-subtle p-3 sm:block lg:w-40">
        <div className="mb-6 flex items-center gap-2 text-lg text-primary">
          <Leaf />
          <span className="font-serif">Relay</span>
        </div>

        <div className="space-y-1">
          {nav.map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2 rounded-lg px-2 py-2 text-[11px] ${
                i === 0
                  ? "bg-primary-subtle font-semibold text-primary"
                  : "text-text-secondary"
              }`}
            >
              <span>{icons[i]}</span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border p-2">
          <p className="text-[10px] font-semibold">Upgrade to Pro</p>
          <p className="my-1 text-[9px] text-muted">Unlock more power.</p>
          <Button size="sm" fullWidth className="rounded-full">
            Upgrade
          </Button>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex h-11 items-center justify-between border-b border-border px-4">
          <span className="rounded-full bg-surface/70 px-3 py-1 text-[10px] text-muted">
            ⌕ &nbsp; Search anything...
          </span>
          <div className="flex items-center gap-3 text-sm">
            <span>♧</span>
            <span className="flex size-7 items-center justify-center rounded-full bg-muted text-xs text-inverse">
              P
            </span>
          </div>
        </header>

        <div className="relative overflow-hidden p-4">
          <div className="pointer-events-none absolute right-0 top-0 size-40 rounded-full bg-[#DDBB91]/30 blur-3xl" />
          <h3 className="relative font-serif text-2xl leading-tight text-text-primary">
            Welcome back,
            <br />
            Prince Chaurasiya.
          </h3>
          <p className="relative mt-1 text-[11px] text-muted">
            Let&apos;s build something amazing today.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 px-3">
          {[
            ["▧", "Total Projects", "12"],
            ["●", "Active Servers", "8"],
            ["↗", "Uptime", "99.9%"],
          ].map(([icon, label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-surface p-3"
            >
              <span className="text-accent">{icon}</span>
              <p className="mt-1 text-[9px] text-muted">{label}</p>
              <strong className="text-lg text-text-primary">{value}</strong>
            </div>
          ))}
        </div>

        <div className="m-3 rounded-xl border border-border bg-surface p-3">
          <div className="mb-3 flex justify-between text-xs">
            <strong>Your Projects</strong>
            <span className="text-muted">View all →</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-surface-secondary text-primary">
              <Leaf />
            </span>
            <div className="min-w-0 flex-1">
              <strong className="text-xs">Relay Platform</strong>
              <p className="text-[10px] text-muted">Updated 2m ago</p>
            </div>
            <Badge color="active">Online</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-3 py-5 text-text-primary sm:px-5 lg:px-6">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <header className="mb-7 flex flex-col gap-5 px-3 sm:flex-row sm:items-center sm:gap-10 lg:px-8">
          <div className="flex items-center gap-4">
            <Leaf size={48} />
            <div>
              <h1 className="font-serif text-5xl tracking-tight text-primary">
                Relay
              </h1>
              <p className="mt-1 text-xs text-text-secondary">
                Build. Deploy. Scale.
              </p>
            </div>
          </div>

          <div className="hidden h-20 w-px bg-[#DDCEBA] sm:block" />

          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              Style Guide
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              A refined design system for a modern developer platform.
            </p>
          </div>
        </header>

        {/* Top section */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-12">
          <Panel
            title="Color Palette"
            subtitle="A warm, elegant palette inspired by nature."
            className="lg:col-span-3"
          >
            <div className="grid grid-cols-4 gap-x-3 gap-y-5">
              {colors.map(([name, hex]) => (
                <div key={name} className="min-w-0">
                  <div
                    className="mb-2 aspect-[1.5] rounded-xl border border-border/50 shadow-sm"
                    style={{ backgroundColor: hex }}
                  />
                  <p className="text-[10px] font-semibold leading-tight">
                    {name}
                  </p>
                  <p className="text-[9px] text-muted">{hex}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            title="Typography"
            subtitle="Two fonts. Perfect harmony."
            className="lg:col-span-3"
          >
            <div>
              <p className="font-serif text-5xl tracking-tight">BJCree</p>
              <p className="mb-3 text-xs text-muted">Headings & Display</p>
              <p className="text-xs leading-5 text-text-secondary">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                <br />
                Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                <br />0 1 2 3 4 5 6 7 8 9
              </p>
            </div>
            <div className="my-4 border-t border-border" />
            <div>
              <p className="text-3xl font-medium tracking-tight">Elms Sans</p>
              <p className="mb-3 text-xs text-muted">UI, Body & Interface</p>
              <p className="text-xs leading-5 text-text-secondary">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                <br />
                Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                <br />0 1 2 3 4 5 6 7 8 9
              </p>
            </div>
          </Panel>

          <Panel
            title="Radius"
            subtitle="Soft, modern corners."
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-3 gap-4">
              {radii.map(([value, label, radius]) => (
                <div
                  key={value}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`mb-2 aspect-square w-full max-w-14 bg-accent-subtle ${radius}`}
                  />
                  <strong className="text-[11px]">{value}</strong>
                  <span className="text-[10px] text-muted">{label}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            title="Buttons"
            subtitle="Clean. Expressive. Intentional."
            className="lg:col-span-2"
          >
            <div className="space-y-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                rightIcon={<ArrowRight size={14} />}
                className="justify-between rounded-full"
              >
                Primary Button
              </Button>
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                rightIcon={<ArrowRight size={14} />}
                className="justify-between rounded-full"
              >
                Secondary Button
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                rightIcon={<ArrowRight size={14} />}
                className="justify-between rounded-full"
              >
                Outline Button
              </Button>
              <Button
                variant="ghost"
                size="sm"
                fullWidth
                rightIcon={<ArrowRight size={14} />}
                className="justify-between rounded-full"
              >
                Ghost Button
              </Button>
              <Button size="sm" fullWidth disabled className="rounded-full">
                Disabled Button
              </Button>
            </div>
          </Panel>

          <Panel
            title="Badges"
            subtitle="Small indicators, big clarity."
            className="lg:col-span-2"
          >
            <div className="flex flex-col items-start gap-3">
              <Badge color="active">Active</Badge>
              <Badge color="pending">Pending</Badge>
              <Badge color="error">Error</Badge>
              <Badge color="neutral">Neutral</Badge>
            </div>
          </Panel>
        </div>

        {/* Middle section */}
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-12">
          <Panel
            title="Inputs"
            subtitle="Elegant & accessible."
            className="lg:col-span-3"
          >
            <div className="space-y-3">
              <label className="flex items-center gap-3 rounded-full border border-border bg-surface/40 px-4 py-3">
                <span>✉</span>
                <input
                  className="w-full bg-transparent text-xs outline-none placeholder:text-muted"
                  placeholder="Enter your email..."
                />
              </label>
              <label className="flex items-center gap-3 rounded-full border border-[#78805A] bg-surface/40 px-4 py-3">
                <span>♙</span>
                <input
                  className="w-full bg-transparent text-xs outline-none placeholder:text-muted"
                  placeholder="Enter your name..."
                />
              </label>
              <label className="flex items-center gap-3 rounded-full bg-disabled/60 px-4 py-3">
                <span className="text-disabled">♙</span>
                <input
                  disabled
                  className="w-full bg-transparent text-xs outline-none placeholder:text-disabled"
                  placeholder="Disabled input..."
                />
              </label>
              <div>
                <label className="flex items-center gap-3 rounded-full border border-[#C75B48] bg-[#FCE8E0] px-4 py-3">
                  <span className="text-[#B34336]">!</span>
                  <input
                    className="w-full bg-transparent text-xs outline-none placeholder:text-[#B34336]"
                    placeholder="Invalid input..."
                  />
                </label>
                <p className="mt-1 px-3 text-[10px] text-[#B34336]">
                  Please enter a valid value.
                </p>
              </div>
            </div>
          </Panel>

          <Panel
            title="Cards"
            subtitle="Organize information beautifully."
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/50">
              <div className="relative flex h-32 items-center justify-center overflow-hidden bg-linear-to-br from-[#D9B58C] via-[#B8875D] to-[#72503B]">
                <div className="flex h-28 w-24 items-center justify-center rounded-t-full border-[9px] border-[#F1D6B5] bg-[#E8C7A2]/40">
                  <Leaf size={40} />
                </div>
                <div className="absolute bottom-2 left-3 size-8 rounded-full bg-primary/30 blur-md" />
              </div>
              <div className="p-3">
                <div className="mb-2 flex justify-end">
                  <Badge color="active">Active</Badge>
                </div>
                <h3 className="font-serif text-xl">Premium VPS</h3>
                <p className="text-xs text-muted">
                  High performance, low latency.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs">▤ &nbsp; 2 vCPU · 4 GB</span>
                  <span className="flex size-7 items-center justify-center rounded-full border border-border-strong">
                    →
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-surface-secondary text-primary">
                <Leaf size={30} />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="text-sm">Relay Pro</strong>
                <p className="text-xs text-muted">Deploy. Monitor. Grow.</p>
              </div>
              <span>→</span>
            </div>
          </Panel>

          <Panel
            title="Dashboard Preview"
            subtitle="A glimpse of Relay in action."
            className="lg:col-span-6"
          >
            <DashboardPreview />
          </Panel>
        </div>

        {/* Bottom section */}
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-12">
          <Panel
            title="Navigation"
            subtitle="Sidebar, navbar and more."
            className="lg:col-span-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                {[
                  "Dashboard",
                  "Projects",
                  "Monitoring",
                  "Billing",
                  "Settings",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs ${i === 0 ? "bg-primary text-inverse" : "text-text-secondary"}`}
                  >
                    <span>{["⌂", "▧", "⌁", "▤", "⚙"][i]}</span>
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-5 flex items-center justify-around rounded-xl border border-border bg-surface/50 p-3">
                  <Leaf />
                  <strong className="font-serif">Relay</strong>
                  <span>⌕</span>
                  <span>♧</span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-muted text-inverse">
                    P
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-full bg-surface-secondary p-1 text-[10px]">
                  <strong className="rounded-full bg-primary px-3 py-2 text-inverse">
                    All
                  </strong>
                  <span>Active</span>
                  <span>Archived</span>
                </div>
              </div>
            </div>
          </Panel>

          <Panel
            title="Other Components"
            subtitle="Alerts, toggles, and more."
            className="lg:col-span-3"
          >
            <div className="space-y-2">
              <div className="rounded-xl border border-[#D6DAB8] bg-[#EDF0D9] p-3 text-xs text-secondary">
                ● &nbsp; Operation completed successfully.{" "}
                <span className="float-right">×</span>
              </div>
              <div className="rounded-xl border border-[#F2D6A5] bg-[#FFF0D5] p-3 text-xs text-[#99601C]">
                ▲ &nbsp; Please review your settings.{" "}
                <span className="float-right">×</span>
              </div>
              <div className="rounded-xl border border-[#F0C4B7] bg-[#FCE3DB] p-3 text-xs text-[#A34335]">
                ● &nbsp; Something went wrong.{" "}
                <span className="float-right">×</span>
              </div>
            </div>
          </Panel>

          <Panel
            title="Controls"
            subtitle="Selection states."
            className="lg:col-span-2"
          >
            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <span className="flex h-6 w-11 items-center justify-end rounded-full bg-secondary p-1">
                  <span className="size-4 rounded-full bg-white" />
                </span>
                <span className="flex h-6 w-11 items-center rounded-full bg-disabled p-1">
                  <span className="size-4 rounded-full bg-white" />
                </span>
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-secondary"
                />{" "}
                Remember me
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="option"
                  defaultChecked
                  className="accent-primary"
                />{" "}
                Option A
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="option" className="accent-primary" />{" "}
                Option B
              </label>
            </div>
          </Panel>

          <Panel
            title="Fonts in Use"
            subtitle="Typography reference."
            className="lg:col-span-1"
          >
            <p className="font-serif text-2xl">BJ</p>
            <p className="mb-4 text-[10px] text-muted">Display</p>
            <p className="text-xl">Elms</p>
            <p className="text-[10px] text-muted">Interface</p>
          </Panel>

          <Panel
            title="Design Tokens"
            subtitle="Core values."
            className="lg:col-span-1"
          >
            {colors.slice(4, 8).map(([name, hex]) => (
              <div key={name} className="mb-3">
                <p className="text-[10px]">{name}</p>
                <strong className="text-[10px] text-muted">{hex}</strong>
              </div>
            ))}
          </Panel>
        </div>

        {/* Brand footer */}
        <footer className="mt-2 flex flex-col items-center justify-center rounded-2xl border border-border bg-surface-secondary py-8 text-primary">
          <Leaf size={48} />
          <h2 className="mt-1 font-serif text-4xl">Relay</h2>
          <p className="mt-1 text-xs text-text-secondary">
            Build. Deploy. Scale.
          </p>
        </footer>

        <div className="flex justify-between px-2 py-5 text-[10px] tracking-widest text-muted">
          <span>RELAY DESIGN SYSTEM</span>
          <span>BUILD. DEPLOY. SCALE.</span>
        </div>
      </div>
    </main>
  );
}
