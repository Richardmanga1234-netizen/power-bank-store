import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-sky-500 text-white hover:bg-sky-400",
        variant === "secondary" &&
          "border border-white/20 text-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
