import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const editorialActionClassName = "inline-flex min-h-11 w-fit items-center gap-3 border-b border-current text-sm font-medium transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export function EditorialLink({ children, className, ...props }: ComponentProps<"a">) {
  return (
    <a {...props} className={cn(editorialActionClassName, className)}>
      {children}<ArrowUpRight aria-hidden="true" size={18} className="shrink-0" />
    </a>
  );
}
