'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import { FeatureCard } from "../components/ui/feature-card"
import { type Feature } from "../Types"

const features: Feature[] = [
  {
    title: "Streamline Staffing",
    image: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhover-bg1.jpeg&w=1920&q=75",
    items: [
      "Cut vetting time by 50%",
      "Automate resume screening",
      "Prioritize quality over quantity",
      "Tailor processes for tech roles"
    ]
  },
  {
    title: "Leverage AI & ML",
    image: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Flanding-page%2Fmetrics-bg.png&w=1920&q=75",
    items: [
      "Automate candidate matching",
      "Assess technical skills and fit",
      "Use Custom LLMs for insights",
      "Ensure efficiency with AI tools"
    ]
  },
  {
    title: "Enhance Security",
    image: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fabout-us%2Fjoinus-bg.png&w=1920&q=75",
    items: [
      "Protect candidate data",
      "Stay compliant with regulations",
      "Use end-to-end encryption",
      "Prevent data breaches"
    ]
  },
  {
    title: "Achieve Results",
    image: "https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fhover-bg2.jpeg&w=1920&q=75",
    items: [
      "Faster decisions, better accuracy",
      "Lower turnover with better matches",
      "Increase client confidence",
      "100% refund guarantee"
    ]
  }
]

export default function CandidateAssessments() {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-[30px] p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Candidate{" "}
        <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">
          Assessments
        </span>
      </h1>

      <div className="relative group">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 md:basis-1/2 lg:basis-1/3 transition-opacity duration-300"
              >
                <FeatureCard feature={feature} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Carousel>
      </div>
    </div>
  )
}

