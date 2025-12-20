"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface SectionDividerProps {
  variant?: "default" | "accent" | "minimal"
  className?: string
}

export function SectionDivider({ variant = "default", className = "" }: SectionDividerProps) {
  const variants = {
    default: {
      iconBg: "from-primary/20 to-ocean/20",
      iconBorder: "border-primary/30",
      iconColor: "text-primary",
      lineColor: "via-primary/20"
    },
    accent: {
      iconBg: "from-gold/20 to-accent/20",
      iconBorder: "border-gold/30",
      iconColor: "text-amber-500",
      lineColor: "via-gold/20"
    },
    minimal: {
      iconBg: "from-muted/20 to-muted/10",
      iconBorder: "border-muted/30",
      iconColor: "text-muted-foreground",
      lineColor: "via-muted/10"
    }
  }

  const style = variants[variant]

  return (
    <div className={`relative py-12 overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div 
          className="w-full h-px"
          style={{
            background: `linear-gradient(to right, transparent, hsl(var(--primary) / 0.2), transparent)`
          }}
        ></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background px-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className={`w-16 h-16 rounded-full bg-gradient-to-br ${style.iconBg} flex items-center justify-center border-2 ${style.iconBorder} shadow-lg`}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className={`h-8 w-8 ${style.iconColor}`} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

