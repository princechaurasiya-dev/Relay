import type { HTMLAttributes } from "react";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "outline";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-surface-secondary text-text-secondary border-border",
  primary: "bg-primary-subtle text-primary border-primary-subtle",
  secondary: "bg-secondary-subtle text-secondary border-secondary-subtle",
  success: "bg-secondary-subtle text-secondary border-secondary",
  danger: "bg-accent-subtle text-accent border-accent",
  warning: "bg-accent-subtle text-accent border-accent",
  info: "bg-primary-subtle text-primary border-primary",
  outline: "bg-transparent text-text-secondary border-border-strong",
};

const sizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-[10px] gap-1",
  md: "px-2.5 py-1 text-xs gap-1.5",
  lg: "px-3 py-1.5 text-sm gap-2",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-muted",
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-secondary",
  danger: "bg-accent",
  warning: "bg-accent",
  info: "bg-primary",
  outline: "bg-muted",
};

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex w-fit shrink-0 items-center rounded-full border
        font-medium leading-none whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={`size-1.5 shrink-0 rounded-full ${dotColors[variant]}`}
        />
      )}

      {children}
    </span>
  );
}
