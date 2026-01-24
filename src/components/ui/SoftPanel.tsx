import { ReactNode } from "react"
import clsx from "clsx"

interface SoftPanelProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export default function SoftPanel({
  children,
  className = "",
  hoverable = false,
}: SoftPanelProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white/70 backdrop-blur-sm shadow-md border border-gray-200/60",
        hoverable &&
          "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  )
}
