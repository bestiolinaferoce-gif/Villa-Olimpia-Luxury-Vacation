/**
 * ButtonLink - Componente che evita problemi di hydration con Button + Link
 * Usa Link direttamente con le classi del button invece di Button asChild
 */

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonLink.displayName = "ButtonLink"

export { ButtonLink }

