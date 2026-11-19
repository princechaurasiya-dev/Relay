import type { ReactNode } from "react";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: string;
  children: ReactNode;
  placement?: TooltipPlacement;
  className?: string;
}

const placements: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};

export function Tooltip({
  content,
  children,
  placement = "top",
  className = "",
}: TooltipProps) {
  return (
    <span className={`group relative inline-flex ${className}`}>
      {children}

      <span
        role="tooltip"
        className={`
      pointer-events-none absolute z-50
      whitespace-nowrap rounded-lg
      border border-[#514538]
      bg-[#302820] px-3 py-2
      text-xs font-medium text-[#F5EDE2]
      shadow-lg shadow-black/10

      opacity-0
      scale-95
      transition-all duration-200
      ease-[cubic-bezier(0.22,1,0.36,1)]

      ${placements[placement]}

      group-hover:opacity-100
      group-hover:scale-100
      group-focus-within:opacity-100
      group-focus-within:scale-100
    `}
      >
        {content}
      </span>
    </span>
  );
}

export type { TooltipProps, TooltipPlacement };
