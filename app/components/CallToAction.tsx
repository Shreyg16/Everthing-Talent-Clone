import React from 'react';
import Image from 'next/image';
import Bar from '../Public/image/bar.svg'
import { BorderBeam } from './ui/border-beam';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black relative flex items-center justify-center min-h-screen py-12 px-4 overflow-hidden flex-col">
      <div className="relative w-full max-w-[1440px] h-auto md:h-[580px] mt-8 mb-28">
        <Image
          alt="vd1"
          src="https://everythingtalent-ai.vercel.app/assets/use-cases/vd1.svg"
          width={120}
          height={120}
          className="absolute top-[10%] left-[5%] md:top-[100px] md:left-[70px] z-10 animate-float w-16 h-16 md:w-[120px] md:h-[120px]"
          unoptimized
        />
        <Image
          alt="vd2"
          src="https://everythingtalent-ai.vercel.app/assets/use-cases/vd2.svg"
          width={120}
          height={120}
          className="absolute bottom-[20%] left-[5%] md:bottom-[130px] md:left-[70px] z-10 animate-float w-16 h-16 md:w-[120px] md:h-[120px]"
          unoptimized
        />
        <Image
          alt="vd3"
          src="https://everythingtalent-ai.vercel.app/_next/image?url=%2Fassets%2Fuse-cases%2Fvd3.png&w=128&q=75"
          width={120}
          height={120}
          className="absolute top-[40%] right-[5%] md:top-[250px] md:right-[100px] animate-float w-16 h-16 md:w-[120px] md:h-[120px]"
          unoptimized
       />
        <Image
          alt="vd2"
          src="https://everythingtalent-ai.vercel.app/assets/use-cases/vd2.svg"
          width={120}
          height={120}
          className="absolute bottom-[-5%] right-[5%] md:bottom-[-40px] md:right-[100px] animate-float w-16 h-16 md:w-[120px] md:h-[120px]"
          unoptimized
        />

        {/* Bar SVGs */}
        <div className="hidden md:flex flex-row absolute top-[250px] left-[-320px] gap-5">
          {[1, 2, 3].map((i) => (
            <Image key={i} alt={`Line SVG ${i}`} src={Bar} width={190} height={190} className="z-10 bg-black/30" />
          ))}
        </div>
        <div className="hidden md:flex flex-row absolute bottom-[50px] left-[-270px] gap-5">
          {[1, 2, 3].map((i) => (
            <Image key={i} alt={`Line SVG ${i}`} src={Bar} width={190} height={190} className="z-10 bg-black/30" />
          ))}
        </div>
        <div className="hidden md:flex flex-row absolute top-[150px] right-[-320px] gap-5">
          {[1, 2, 3].map((i) => (
            <Image key={i} alt={`Line SVG ${i}`} src={Bar} width={190} height={190} className="z-10 bg-black/30" />
          ))}
        </div>
        <div className="hidden md:flex flex-row absolute bottom-[120px] right-[-270px] gap-5">
          {[1, 2, 3].map((i) => (
            <Image key={i} alt={`Line SVG ${i}`} src={Bar} width={190} height={190} className="z-10 bg-black/30" />
          ))}
        </div>

        <div className="text-center space-y-4 relative z-30">
          <h2 className="text-3xl md:text-5xl mb-10 md:mb-20 font-bold">
            Call to{' '}
            <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">Action</span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold flex justify-center items-center space-x-2">
            <Image alt="vd2" src="https://everythingtalent-ai.vercel.app/assets/use-cases/vd-icon1.svg" width={18} height={18} className="mr-2" unoptimized />
            <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text font-bold">
              See how it works
            </span>
            <Image alt="vd2" src="https://everythingtalent-ai.vercel.app/assets/use-cases/vd-icon2.svg" width={18} height={18} className="ml-2" unoptimized />
          </h2>
        </div>

        <div className="relative max-w-[800px] mx-auto mt-8 flex justify-center items-center">
          <div className="absolute top-[-90px] left-[-10px] pointer-events-none w-full max-w-[815px]">
            <div className="w-full h-[250px] rounded-lg bg-gradient-to-bl from-[#1B8BFA] via-[#DA16C6] to-[#FED71E] p-[3px] shadow-2xl">
              <div className="w-full h-[245px] rounded-lg bg-white/80 dark:bg-black/90 z-30"></div>
            </div>
          </div>
          <button className="bg-transparent relative text-xl p-[1px] overflow-hidden rounded-[26px] w-full max-w-[700px]">
            <div className="absolute inset-0 rounded-[calc(26px*0.96)]">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full">
                <rect fill="none" width="100%" height="100%" rx="10%" ry="10%"></rect>
              </svg>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500 to-blue-400 opacity-80"></div>
              <BorderBeam size={350} duration={10} delay={20}  />
            </div>
            <div className="relative bg-slate-900/[0.8] border-[1px] backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased rounded-[26px]">
              <div className="relative w-full max-w-[700px] h-[200px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://everythingtalent-ai.vercel.app/assets/use-cases/funded-startups/thumbnail_3.jpg"
                  alt="Hero Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gray-200 rounded-2xl opacity-30"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

