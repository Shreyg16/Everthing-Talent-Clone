import React from 'react'
import Image from 'next/image'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="w-full sm:w-[370px] h-[200px] bg-gradient-to-r from-[#f3e8ff] to-[#dbeafe] dark:from-[#30132d] dark:to-[#172033] rounded-lg flex flex-col items-start justify-end p-6 relative overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 group">
    <div className="flex flex-col items-start justify-end h-full w-full">
      <div className="w-full transition-all duration-2000 ease-in-out">
        <div className="bg-purple-800/40 dark:bg-[#261f2a] p-4 mb-4 rounded-xl w-fit transition-all duration-2000 ease-in-out delay-0 group-hover:translate-x-[calc(50%+115px)] transform">
          <Image src={icon} alt={`${title} icon`} width={24} height={24} className="object-contain"  unoptimized />
        </div>
      </div>
      <div className="w-full transition-all duration-800 ease-in-out delay-200 group-hover:text-center">
        <div className="relative z-10 flex flex-col max-w-full transition-all duration-700 ease-in-out group-hover:items-center delay-200">
          <h2 className="text-lg font-bold truncate">{title}</h2>
          <p className="text-md font-extralight mt-2 line-clamp-2 text-left group-hover:text-center">{description}</p>
        </div>
      </div>
    </div>
  </div>
)

const features: FeatureCardProps[] = [
  {
    icon: "https://everythingtalent-ai.vercel.app/assets/use-cases/icon1-pc.svg",
    title: "Streamlined Vetting Processes",
    description: "Leverage AI to reduce manual effort and accelerate the candidate screening process."
  },
  {
    icon: "https://everythingtalent-ai.vercel.app/assets/use-cases/icon2-pc.svg",
    title: "Enhanced Accuracy",
    description: "Utilize ML to match candidates to roles with unparalleled precision."
  },
  {
    icon: "https://everythingtalent-ai.vercel.app/assets/use-cases/icon3-pc.svg",
    title: "Robust Security",
    description: "Ensure the integrity of sensitive data with industry-leading protection measures."
  },
  {
    icon: "https://everythingtalent-ai.vercel.app/assets/use-cases/icon4-pc.svg",
    title: "AI-Powered Screening",
    description: "Automate resume reviews and skill assessments to identify top talent faster."
  },
  {
    icon: "https://everythingtalent-ai.vercel.app/assets/use-cases/icon5-pc.svg",
    title: "Custom Language Models",
    description: "Analyze technical proficiency, cultural fit, and soft skills using tailored LLMs."
  },
  {
    icon: "https://everythingtalent-ai.vercel.app/assets/use-cases/icon6-pc.svg",
    title: "Guaranteed Results",
    description: "Benefit from a 100% refund guarantee if measurable improvements aren't achieved."
  }
]

const InterviewProcess: React.FC = () => {
  return (
    <section className="relative flex flex-col min-h-screen p-6 items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-center mb-12 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-[3.30rem] leading-tight sm:leading-[3.3rem] max-w-[600px] mb-4 font-black mx-auto">
          Streamline Your Interview
          <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">&nbsp;Process</span>
        </h1>
        <p className="text-lg sm:text-xl mt-2 mb-4 max-w-[620px] mx-auto">
          Empower your hiring process with customized interview solutions tailored for efficiency and accuracy.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default InterviewProcess

