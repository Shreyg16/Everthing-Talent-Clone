interface FloatingCardProps {
    children: React.ReactNode
    className?: string
    animate?: "left" | "right" | "left-less" | "right-less"
  }
  
  export function FloatingCard({ children, className = "", animate }: FloatingCardProps) {
    const animationClass = animate ? `animate-move-${animate}` : ""
    
    return (
      <div className={`${className} ${animationClass}`}>
        {children}
      </div>
    )
  }
  
  