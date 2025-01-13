'use client'

import { Star } from 'lucide-react'
import Marquee from "../components/ui/marquee"
import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "",
    alt: "Logo 1"
  },
  {
    src: "/placeholder.svg?height=24&width=72",
    alt: "Logo 2"
  },
  {
    src: "/placeholder.svg?height=32&width=144",
    alt: "Logo 3"
  },
  {
    src: "/placeholder.svg?height=40&width=96",
    alt: "Logo 4"
  },
  {
    src: "/placeholder.svg?height=36&width=108",
    alt: "Logo 5"
  },
  {
    src: "/placeholder.svg?height=28&width=84",
    alt: "Logo 6"
  }
]


export default function TrustedBy() {
  return (
    <div className="relative flex w-full flex-col items-center md:justify-center overflow-hidden rounded-lg bg-background gap-[20px]">
      <h2 className="mb-5 text-base font-bold text-center dark:bg-gradient-to-r bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-gray-500 sm:text-xl sm:leading-[30px] md:text-center dark:text-slate-400">
        EverythingTalent is Trusted by
      </h2>
      <div className="flex items-center justify-center mx-auto md:w-2/4 w-full max-w-7xl gap-4 -my-4">
        <div className="h-px bg-gradient-to-r from-[#0EA5E9] via-[#E879F9] to-[#FACC15] w-full animate-expandLine" />
        <div className="relative w-6 h-6">
          <div className="absolute animate-rotate-star inset-0 flex items-center justify-center">
            <Star className="w-full h-full text-primary" />
          </div>
        </div>
        <div className="h-px bg-gradient-to-l from-[#0EA5E9] via-[#E879F9] to-[#FACC15] w-full animate-expandLine" />
      </div>
      <Marquee className="group flex overflow-hidden p-2 gap-4" repeat={5}>
        {logos.map((logo, index) => (
          <figure key={index} className="relative overflow-hidden p-4 flex flex-col justify-between">
            <div className="flex flex-row items-center gap-2 w-full h-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="dark:hover:brightness-200 hover:brightness-95 transition-all duration-300"
                unoptimized
              />
            </div>
          </figure>
        ))}
      </Marquee>
      <div className="w-1/2 h-0.5 mx-auto mt-12 opacity-20 bg-gradient-to-r from-transparent via-[#B11AFF] to-fuchsia via-purple to-transparent" />
    </div>
  )
}

