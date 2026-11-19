import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

type BaseProps = {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  wrapperClassName?: string;
  multiline?: boolean;
};

type SingleLineProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    multiline?: false;
  };

type MultiLineProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & {
    multiline: true;
  };

export type InputProps = SingleLineProps | MultiLineProps;

export function Input(props: InputProps) {
  const {
    label,
    hint,
    error,
    leftIcon,
    rightIcon,
    wrapperClassName = "",
    multiline = false,
    className = "",
    id,
    disabled,
    ...inputProps
  } = props;

  const inputId = id ?? inputProps.name;
  const descriptionId = error
    ? `${inputId}-error`
    : hint
      ? `${inputId}-hint`
      : undefined;

  const controlClassName = `
    w-full min-w-0 bg-transparent text-sm text-text-primary
    outline-none placeholder:text-disabled
    disabled:cursor-not-allowed
    ${className}
  `;

  return (
    <div className={`flex w-full flex-col gap-2 ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-text-primary"
        >
          {label}
          {props.required && <span className="ml-1 text-accent">*</span>}
        </label>
      )}

      <div
        className={`
          flex w-full gap-3 rounded-xl border bg-surface px-3.5
          transition-colors
          ${multiline ? "items-start py-3" : "h-11 items-center"}
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

        {multiline ? (
          <textarea
            {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={descriptionId}
            className={`${controlClassName} min-h-24 resize-y`}
          />
        ) : (
          <input
            {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={descriptionId}
            className={`${controlClassName} h-full`}
          />
        )}

        {rightIcon && (
          <span className="shrink-0 text-muted [&>svg]:size-4.5">
            {rightIcon}
          </span>
        )}
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
