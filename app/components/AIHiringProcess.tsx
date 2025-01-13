import React from 'react'
import Image from 'next/image'
import { BorderBeam } from './ui/border-beam'

interface TimelineItemProps {
  title: string
  description: string
  imageSrc: string
  isActive?: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, imageSrc, isActive = false }) => (
  <div className="timeline-item flex justify-start pt-10 md:pt-20 md:gap-10 w-full text-neutral-500 dark:text-neutral-500">
    <div className="relative pl-20 md:pl-4 w-full">
      <h3 className={`block text-2xl mb-4 text-left font-bold ${
        isActive ? 'text-black dark:text-white underline underline-offset-8 decoration-1 decoration-slate-600' : 'text-neutral-500 dark:text-neutral-500'
      }`}>
        {title}
      </h3>
      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        {description}
      </p>
      <div className="grid grid-cols-1 gap-8">
        <button className="bg-transparent relative text-xl p-[2px] overflow-hidden" style={{ borderRadius: '36px' }}>
          <div className="absolute inset-0" style={{ borderRadius: 'calc(34.56px)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%">
              <rect fill="none" width="100%" height="100%" rx="10%" ry="10%" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff69b4] to-[#8f3bd5] opacity-30" />
          </div>
          <div className="relative bg-slate-900/[0.8] border-[1px] backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased" style={{ borderRadius: 'calc(36px)' }}>
            <div className="relative rounded-[35px] bg-white dark:bg-black">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#f3e8ff] to-[#dbeafe] dark:from-[#ff85d9] dark:to-[#6b24b2] opacity-30 z-0 pointer-events-none" />
              <BorderBeam size={350} duration={10} delay={20}/>
              <div className="relative z-10 bg-transparent p-4 rounded-[36px]">
                <Image
                  src={imageSrc}
                  alt={`${title} image`}
                  width={2400}
                  height={1400}
                  className="rounded-2xl border-[1px] border-neutral-300 dark:border-neutral-700 object-contain max-w-full max-h-[80rem] shadow"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
)

const AIHiringProcess: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      title: "Job Posting",
      description: "Craft AI-optimized job descriptions tailored to attract top talent. Automatically post across relevant platforms to maximize reach.",
      imageSrc: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhsd2.1.png&w=3840&q=75",
      isActive: true
    },
    {
      title: "Assessment",
      description: "Leverage AI-powered skill assessments to evaluate candidate competencies effectively and quickly identify the best matches",
      imageSrc: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhsd3.1.png&w=3840&q=75"
    },
    {
      title: "Interview Plan",
      description: "Create structured and customizable interview plans that align with job requirements, ensuring fairness and consistency.",
      imageSrc: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhsd4.1.png&w=3840&q=75"
    },
    {
      title: "Recruiter",
      description: "Work with many recruiters and invite them to refine search criteria, suggest top candidates, and improve engagement strategies.",
      imageSrc: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhsd5.1.png&w=3840&q=75"
    },
    {
      title: "Candidates",
      description: "Easily manage candidate profiles, track their progress, and maintain communication—all in one centralized system.",
      imageSrc: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhsd6.1.png&w=3840&q=75"
    },
    {
      title: "Reporting",
      description: "Get actionable insights and data-driven analytics on hiring performance, candidate engagement, and ROI.",
      imageSrc: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhsd7.png&w=3840&q=75"
    }
  ]

  return (
    <div className="w-full bg-white dark:bg-black">
        
      <div className="w-full max-w-6xl mx-auto py-4 px-4 md:px-8 pt-24 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-extrabold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">
            <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">AI-Powered &nbsp;</span>
            Hiring Made Easy.
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-2xl md:text-xl mt-4">
            "From sourcing to onboarding, see how AI and our system transform hiring into a seamless experience."
          </p>
        </div>
      </div>
      <div className="w-full font-sans flex justify-center items-start">
        <div className="flex flex-col w-full max-w-screen-2xl px-4 pb-40">
          <div className="flex justify-between items-start relative w-full">
            <div className="sticky top-40 sm:top-48 lg:top-72 mt-16 sm:mt-24 lg:mt-36 ml-8 mx-auto lg:mr-20 z-40 max-w-full sm:max-w-md lg:max-w-sm px-4 sm:px-0">
              <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold mb-4 text-black dark:text-white max-w-3xl">
                Step-by-step&nbsp;breakdown!
              </h2>
              <br />
              <p className="text-sm sm:text-base md:text-md text-justify font-medium text-neutral-500 dark:text-neutral-500 mt-4">
                1. &nbsp;Job Posting : Craft detailed, AI-optimized job descriptions that highlight key qualifications and responsibilities. Tailor these descriptions to appeal to top-tier talent by leveraging industry insights and AI recommendations. Once finalized, automatically distribute job postings across multiple platforms, ensuring maximum visibility and outreach. This process minimizes the time spent on manual posting while maximizing the chances of finding the perfect candidates.
              </p>
              </div>
              <div className="flex flex-col items-end pt-16 mr-6 md:mr-8 w-full ml-auto">
              
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIHiringProcess

