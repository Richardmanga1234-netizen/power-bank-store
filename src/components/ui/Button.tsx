import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

export default function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cool focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:pointer-events-none",
        size === "md" && "px-7 py-3 text-sm",
        size === "lg" && "px-9 py-4 text-base",
        variant === "primary" &&
          "bg-foreground text-background hover:bg-white active:scale-[0.98]",
        variant === "secondary" &&
          "border border-white/20 text-foreground hover:border-white/40 hover:bg-white/5 active:scale-[0.98]",
        variant === "ghost" &&
          "text-foreground/80 hover:text-foreground",
        className
      )}
      {...props}
    />
  );
}
