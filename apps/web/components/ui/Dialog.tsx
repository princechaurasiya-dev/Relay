"use client";

import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
  Info,
  ShieldAlert,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ButtonVariant } from "@/components/ui/Button";

export type DialogVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export interface DialogProps {
  open: boolean;
  onClose: () => void;

  title: string;
  description?: string;
  children?: ReactNode;

  variant?: DialogVariant;

  confirmLabel?: string;
  cancelLabel?: string;
  confirmVariant?: ButtonVariant;

  onConfirm?: () => void;
  loading?: boolean;
  showCancel?: boolean;
  showCloseButton?: boolean;

  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;

  className?: string;
}

const variantConfig: Record<
  DialogVariant,
  { icon: LucideIcon; iconClass: string }
> = {
  default: {
    icon: CircleHelp,
    iconClass: "bg-surface-secondary text-text-secondary",
  },
  info: {
    icon: Info,
    iconClass: "bg-primary-subtle text-primary",
  },
  success: {
    icon: CheckCircle2,
    iconClass: "bg-secondary-subtle text-secondary",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "bg-accent-subtle text-accent",
  },
  danger: {
    icon: ShieldAlert,
    iconClass: "bg-danger-subtle text-danger",
  },
};

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  variant = "default",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant,
  onConfirm,
  loading = false,
  showCancel = true,
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  className = "",
}: DialogProps) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  const config = variantConfig[variant];
  const Icon = config.icon;

  // Mount/unmount with an exit animation.
  useEffect(() => {
    if (open) {
      setMounted(true);

      const frame = window.requestAnimationFrame(() => {
        setVisible(true);
      });

      return () => window.cancelAnimationFrame(frame);
    }

    setVisible(false);

    if (!mounted) return;

    const timeout = window.setTimeout(() => {
      setMounted(false);
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [open, mounted]);

  // Prevent background scrolling while open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Escape key handling.
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEscape, onClose]);

  if (!mounted) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose();
    }
  };

  const resolvedConfirmVariant =
    confirmVariant ?? (variant === "danger" ? "danger" : "primary");

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        overflow-y-auto bg-text-primary/40 p-4 backdrop-blur-[3px]
        transition-opacity duration-200
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      onMouseDown={handleBackdropClick}
    >
      <div
        role={
          variant === "danger" || variant === "warning"
            ? "alertdialog"
            : "dialog"
        }
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={`
          relative w-full max-w-md overflow-hidden rounded-2xl
          border border-border bg-surface shadow-2xl
          transition-all duration-200
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-95 opacity-0"
          }
          ${className}
        `}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="
              absolute right-4 top-4 flex size-8 items-center
              justify-center rounded-lg text-muted
              transition-colors hover:bg-surface-hover
              hover:text-text-primary
            "
          >
            <X size={17} />
          </button>
        )}

        <div className="p-6">
          <div
            className={`
              mb-4 flex size-11 items-center justify-center
              rounded-xl ${config.iconClass}
            `}
          >
            <Icon size={21} />
          </div>

          <h2
            id={titleId}
            className="pr-8 text-xl font-semibold text-text-primary"
          >
            {title}
          </h2>

          {description && (
            <p
              id={descriptionId}
              className="mt-2 text-sm leading-relaxed text-text-secondary"
            >
              {description}
            </p>
          )}

          {children && (
            <div className="mt-5 text-sm text-text-secondary">{children}</div>
          )}
        </div>

        {(showCancel || onConfirm) && (
          <div
            className="
            flex items-center justify-end gap-3 border-t
            border-border-subtle bg-background-subtle px-6 py-4
          "
          >
            {showCancel && (
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                disabled={loading}
              >
                {cancelLabel}
              </Button>
            )}

            {onConfirm && (
              <Button
                variant={resolvedConfirmVariant}
                size="sm"
                onClick={onConfirm}
                loading={loading}
              >
                {confirmLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
