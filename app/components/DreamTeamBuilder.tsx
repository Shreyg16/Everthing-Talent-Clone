import React from 'react'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  imageSrc: string
  iconSrc: string
  bgImage: string
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, iconSrc, bgImage }) => (
  <article className="group relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[35%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[35%] transition-all duration-300 ease-[cubic-bezier(0.5,0.85,0.25,1.15)]">
    <div 
      className="flex flex-col items-center justify-center text-center gradient-border rounded-xl px-1 shadow-lg w-[180px] h-[200px] xl:h-[354px] xl:w-[269px] lg:h-[334px] lg:w-[238px] md:w-[180px] md:h-[230px] cursor-pointer relative group-hover:w-full transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        
      }}
    >
      <div className="absolute inset-0  bg-black/40 rounded-xl group-hover:bg-black/50 transition-colors duration-300 ease-in-out"></div>
      <Image
        src={iconSrc}
        alt={title}
        width={50}
        height={50}
        className="bg-purple-800/30 dark:bg-transparent rounded-xl dark:rounded-none relative z-10 group-hover:scale-105 transition-transform duration-300"
        unoptimized
      />
      <h3 className="text-xl font-extrabold mb-2 mt-4 relative z-10 text-white">{title}</h3>
      <p className="text-xs font-light text-center relative z-10 text-white">{description}</p>
    </div>
  </article>
)

const DreamTeamBuilder: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Team Collaboration",
      description: "Seamlessly review candidates together to ensure the best hiring decisions.",
      imageSrc: "/assets/use-cases/hover-bg3.jpeg",
      iconSrc: "https://everythingtalent-ai.vercel.app/assets/use-cases/buildteams-icon1.svg",
      bgImage: "https://everythingtalent-ai.vercel.app/assets/use-cases/hover-bg3.jpeg",
    },
    {
      title: "Objective Review",
      description: "Save and revisit candidates final outputs for accurate evaluations.",
      imageSrc: "/assets/use-cases/hover-bg2.jpeg",
      iconSrc: "https://everythingtalent-ai.vercel.app/assets/use-cases/buildteams-icon3.svg",
      bgImage: "https://everythingtalent-ai.vercel.app/assets/use-cases/hover-bg2.jpeg",
    },
    {
      title: "Private Notes",
      description: "Capture your teams feedback with secure interview notes.",
      imageSrc: "/assets/use-cases/hover-bg1.jpeg",
      iconSrc: "https://everythingtalent-ai.vercel.app/assets/use-cases/buildteams-icon2.svg",
      bgImage: "https://everythingtalent-ai.vercel.app/assets/use-cases/hover-bg1.jpeg",
    },
    {
      title: "Confident Hiring",
      description: "Empower your team to confidently make world-class data science hires.",
      imageSrc: "/assets/use-cases/hover-bg3.jpeg",
      iconSrc: "https://everythingtalent-ai.vercel.app/assets/use-cases/buildteams-icon4.svg",
      bgImage: "https://everythingtalent-ai.vercel.app/assets/use-cases/hover-bg3.jpeg",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl text-center my-20 font-semibold">
        How Can We Build Your <br /> Dream{' '}
        <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">
          Team?
        </span>
      </h1>
      <div className="group flex max-md:flex-col justify-center gap-2 w-full px-6 mx-auto mb-10 mt-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default DreamTeamBuilder

