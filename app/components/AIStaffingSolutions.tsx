import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Result from '../Public/image/result.webp'
import Solution from '../Public/image/solution.webp'
import Icon1 from '../Public/image/hero-review1.svg'
import Icon3 from '../Public/image/challenge1.svg'
import { BorderBeam } from './ui/border-beam';

const AIStaffingSolutions: React.FC = () => {
  return (
    <div className="bg-background relative flex items-center justify-center min-h-screen py-8 lg:py-0 lg:h-screen flex-col overflow-hidden">
      <div className="relative w-full max-w-[1440px] h-full lg:h-[780px] px-4">
        {/* Professional Woman Image */}
        <div className="absolute top-[5%] left-[5%] lg:top-[50px] lg:left-[300px] animate-move-left hidden lg:block">
          <Image
            alt="Professional"
            src={Result}
            width={190}
            height={150}
            priority
            className="z-10 rounded-lg"
          />
        </div>

        {/* Rating Component */}
        <div className="absolute top-[20%] left-[10%] lg:top-[270px] lg:left-[430px] animate-move-left-less hidden lg:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-lg font-semibold">4.8</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipPath="url(#half-star)" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm">1.2k reviews</p>
          </div>
        </div>

        {/* Join Team Image */}
        <div className="absolute bottom-[15%] left-[5%] lg:bottom-[190px] lg:left-[230px] animate-fade-in hidden lg:block">
          <Image
            alt="Join Team"
            src={Icon3}
            width={180}
            height={180}
            priority
            className="z-10 rounded-lg"
          />
        </div>

        {/* Main Heading */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 lg:translate-x-0 lg:top-[80px] lg:left-[560px] max-w-[90%] lg:max-w-[500px] text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-black dark:text-white leading-tight animate-fade-in">
            Empowering Staffing Firms with AI-Driven Hiring{' '}
            <span className="bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text">Solutions</span>.
          </h1>
        </div>

        {/* Meeting Image */}
        <div className="absolute top-[40%] right-[5%] lg:top-[220px] lg:right-[160px] animate-fade-in hidden lg:block">
          <Image
            alt="Meeting"
            src={Solution}
            width={200}
            height={170}
            priority
            className="z-10 rounded-lg"
          />
        </div>

        {/* API Requests Card */}
        <div className="absolute bottom-[25%] right-[10%] lg:bottom-[220px] lg:right-[320px] animate-fade-in hidden lg:block">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <Image
                alt="API Icon"
                src={Icon1}
                width={32}
                height={32}
                priority
                className="mb-0"
              />
              <p className="text-black dark:text-white text-sm">10k+ AI API Requests Monthly</p>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <p className="absolute bottom-[20%] left-[50%] -translate-x-1/2 lg:translate-x-0 lg:bottom-[250px] lg:left-[450px] text-sm lg:text-lg text-black dark:text-gray-400 max-w-[90%] lg:max-w-[400px] text-center lg:text-left animate-fade-in">
          Everything talent leverages{' '}
          <span className="text-black dark:text-white ">AI, ML</span>, and advanced security to streamline and enhance candidate evaluation for staffing firms.
        </p>

        {/* Decorative Elements */}
        <div className='hidden lg:block absolute top-[160px] left-[130px] animate-move-left'>
          <div className="w-[150px] h-[140px] bg-[#f5eaf8] rounded-2xl dark:bg-[#250831]"></div>
        </div>

        <div className='hidden lg:block absolute top-[300px] left-[930px] animate-move-right'>
          <div className="w-[130px] h-[130px] bg-gradient-to-r from-[#fbe9f5] to-[#f9ebf3] dark:bg-gradient-to-r dark:from-[#280d29] dark:to-[#2a0c29] rounded-2xl"></div>
        </div>
         
        <div className='hidden lg:block absolute top-[95px] right-[250px] animate-move-right'>
          <div className="w-[110px] h-[110px] bg-gradient-to-r from-[#f3e8ff] to-[#dbeafe] dark:bg-gradient-to-r dark:from-[#341521] dark:to-[#341521] rounded-2xl"></div>
        </div>

        {/* CTA Buttons */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 lg:bottom-[50px] flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-auto px-4 lg:px-0">
          <Link href="/" className="w-full lg:w-auto text-sm sm:text-base">
            <button className="w-full lg:w-auto whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer justify-center bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 h-12 lg:text-md sm:text-sm flex items-center">
              Get Started
              <svg className="w-4 h-4 ms-2 group-hover:translate-x-1 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </button>
          </Link>
          <div className="relative flex w-full lg:w-[200px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background lg:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap text-black text-center text-sm font-semibold leading-none text-transparent dark:text-white">
              Contact with Team 
            </span>
            <BorderBeam size={70} duration={10} delay={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStaffingSolutions;

