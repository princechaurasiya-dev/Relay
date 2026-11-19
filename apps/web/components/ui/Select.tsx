import type { ReactNode, SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  wrapperClassName?: string;
  leftIcon?: ReactNode;
}

export function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  wrapperClassName = "",
  className = "",
  leftIcon,
  id,
  disabled,
  required,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name;
  const descriptionId = error
    ? `${selectId}-error`
    : hint
      ? `${selectId}-hint`
      : undefined;

  return (
    <div className={`flex w-full flex-col gap-2 ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-text-primary"
        >
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </label>
      )}

      <div
        className={`
          relative flex h-11 w-full items-center gap-3 rounded-xl
          border bg-surface px-3.5 transition-colors
          ${
            error
              ? "border-accent focus-within:border-accent"
              : "border-border focus-within:border-border-focus"
          }
          ${disabled ? "cursor-not-allowed bg-surface-secondary opacity-60" : ""}
        `}
      >
        {leftIcon && (
          <span className="shrink-0 text-muted [&>svg]:size-4.5">
            {leftIcon}
          </span>
        )}

        <select
          {...props}
          id={selectId}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={descriptionId}
          className={`
            h-full min-w-0 flex-1 appearance-none bg-transparent
            pr-7 text-sm text-text-primary outline-none
            disabled:cursor-not-allowed
            ${className}
          `}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3.5 text-muted"
        />
      </div>

      {error ? (
        <p id={descriptionId} className="text-xs text-accent">
          {error}
        </p>
      ) : hint ? (
        <p id={descriptionId} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
