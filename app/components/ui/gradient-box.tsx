interface GradientBoxProps {
    className?: string
    animate?: "left" | "right" | "left-less" | "right-less"
  }
  
  export function GradientBox({ className = "", animate }: GradientBoxProps) {
    const animationClass = animate ? `animate-move-${animate}` : ""
    
    return (
      <div 
        className={`
          bg-gradient-to-r from-[#f3e8ff] to-[#dbeafe] 
          dark:from-[#341521] dark:to-[#341521] 
          rounded-2xl
          ${className}
          ${animationClass}
        `}
      />
    )
  }
  
  