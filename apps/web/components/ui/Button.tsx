import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover",

  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-hover",

  outline:
    "border border-border bg-transparent text-text-primary hover:bg-surface-hover",

  ghost: "bg-transparent text-text-secondary hover:bg-surface-hover",

  danger:
    "bg-danger text-danger-foreground hover:bg-danger-hover active:bg-danger-hover",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs gap-2",
  md: "h-11 px-5 text-sm gap-2.5",
  lg: "h-13 px-7 text-sm gap-3",
  icon: "size-10 p-0",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      className={[
        "inline-flex shrink-0 items-center justify-center",
        "rounded-xl font-medium",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-border-focus focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        "active:scale-[0.98]",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : leftIcon}

      {children}

      {!loading && rightIcon}
    </button>
  );
}

export type { ButtonProps, ButtonVariant, ButtonSize };
