"use client"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

interface YuktaraTextEffectProps {
  className?: string
}

export const YuktaraTextEffect = ({ className = "" }: YuktaraTextEffectProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-4xl mx-auto">
        <TextHoverEffect text="YUKTARA" />
      </div>
    </div>
  )
}
