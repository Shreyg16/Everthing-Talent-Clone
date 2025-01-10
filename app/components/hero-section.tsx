import Image from "next/image"
import { FloatingCard } from "../components/ui/floating-card"
import { GradientBox } from "../components/ui/gradient-box"
import { StatsCard } from "../components/ui/stats-card"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[580px] px-4 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mb-8 md:mb-0 md:max-w-[500px] leading-tight md:leading-[60px] animate-fade-in">
          Empowering Staffing Firms with AI-Driven Hiring{" "}
          <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">
            Solutions
          </span>
          .
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg font-bold text-[#6b717b] text-center md:text-left md:max-w-[470px] mt-4 md:mt-8 animate-fade-in">
          Everything talent leverages{" "}
          <span className="text-black dark:text-white">AI, ML</span>
          , and advanced security to streamline and enhance candidate evaluation for staffing firms.
        </p>

        {/* Floating elements */}
        <div className="hidden md:block">
          {/* Images */}
          <FloatingCard animate="left" className="absolute top-[70px] left-[170px] md:left-[370px] lg:left-[570px]">
            <Image
              src="/assets/use-cases/result.png"
              alt="Funded 1"
              width={210}
              height={150}
              className="z-10"
              priority
            />
          </FloatingCard>

          <FloatingCard animate="right" className="absolute top-[270px] right-[60px] md:right-[160px] lg:right-[360px]">
            <Image
              src="/assets/use-cases/solution.png"
              alt="Funded 2"
              width={200}
              height={170}
              className="z-10"
              priority
            />
          </FloatingCard>

          {/* Decorative boxes */}
          <GradientBox 
            animate="left"
            className="absolute top-[220px] left-[100px] md:left-[200px] lg:left-[400px] w-[150px] h-[140px]"
          />

          <GradientBox 
            animate="right"
            className="absolute top-[140px] right-[150px] md:right-[250px] lg:right-[450px] w-[110px] h-[110px]"
          />

          <GradientBox 
            animate="right"
            className="absolute top-[380px] left-[330px] md:left-[530px] lg:left-[730px] w-[130px] h-[130px]"
          />

          {/* Stats cards */}
          <FloatingCard animate="left-less" className="absolute top-[320px] left-[60px] md:left-[160px] lg:left-[260px]">
            <div className="bg-white/10 backdrop-blur-sm rounded-sm shadow-lg px-6 py-2 pr-20">
              <Image
                src="/assets/use-cases/hero-review2.svg"
                alt="Icon"
                width={100}
                height={100}
                className="mb-2"
                priority
              />
            </div>
          </FloatingCard>

          <StatsCard
            icon="/assets/use-cases/hero-review1.svg"
            text="10k+ AI API Requests Monthly"
            animate="right-less"
            className="absolute top-[480px] left-[400px] md:left-[600px] lg:left-[800px]"
          />
        </div>
      </div>
    </section>
  )
}

