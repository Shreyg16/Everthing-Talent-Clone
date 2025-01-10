import Image from "next/image"

interface StatsCardProps {
  icon: string
  text: string
  className?: string
  animate?: "left" | "right" | "left-less" | "right-less"
}

export function StatsCard({ icon, text, className = "", animate }: StatsCardProps) {
  const animationClass = animate ? `animate-move-${animate}` : ""
  
  return (
    <div className={`
      bg-white/20 backdrop-blur-sm rounded-lg py-2 px-4 shadow-lg
      ${className}
      ${animationClass}
    `}>
      <Image
        src={icon}
        alt="Icon"
        width={32}
        height={32}
        className="mb-2"
      />
      <p className="text-black dark:text-white text-center text-sm">
        {text}
      </p>
    </div>
  )
}

