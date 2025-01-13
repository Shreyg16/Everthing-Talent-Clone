import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import Link from "next/link";


const items = [
  {
    id: "1",
    question: "How can I reach out for help?",
    answer: "You can reach out to our support team through our contact page or by emailing support@example.com."
  },
  {
    id: "2",
    question: "What's the typical response time ?",
    answer: "We typically respond within 24 hours during business days."
  },
  {
    id: "3",
    question: "What should I do if there's no response yet?",
    answer: "If you haven't received a response within 48 hours, please check your spam folder or try contacting us through a different channel."
  },
  {
    id: "4",
    question: "What candidate levels can your platform evaluate?",
    answer: "Our platform can evaluate candidates at all levels, from entry-level to executive positions."
  },
  {
    id: "5",
    question: "Is your platform suitable for startups or enterprises?",
    answer: "Our platform is designed to be scalable and can accommodate both startups and large enterprises."
  },
  {
    id: "6",
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. Please refer to our refund policy for more details."
  }
];

export default function FAQ() {
  return (
    <div className="space-y-4 min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <h2 className="dark:bg-[#404040] text-[#B11AFF] mt-4 sm:mt-10 py-2 px-3 rounded-lg w-fit text-xs sm:text-sm font-mono font-medium tracking-tight bg-black">
          FAQ
        </h2>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-center text-neutral-900 dark:text-white">
        Frequently Asked <span className='bg-gradient-to-r from-[#B11AFF] to-[#FF689F] text-transparent bg-clip-text'>Questions</span>
      </h2>
      <p className="font-sans font-normal text-sm sm:text-base leading-6 sm:leading-7 text-center text-slate-400 mb-6 sm:mb-10">
        Our Commitment at the Core
      </p>
      <Accordion 
        type="single" 
        collapsible 
        className="w-full max-w-6xl mx-auto space-y-2" 
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded-lg border border-neutral-800 bg-white px-4 py-1 dark:border-gray-400 dark:bg-background"
          >
            <AccordionTrigger className="py-2 text-sm sm:text-base leading-6 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-sm sm:text-base text-black dark:text-white">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex lg:ml-36 mt-6 sm:mt-10 sm:ml-0">
        {/* <RainbowButton className="text-sm sm:text-base">
          More FAQ's
          <svg 
            className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd"
            />
          </svg>
        </RainbowButton> */}
      <Link href="/" className="text-sm sm:text-base">
            <button className="whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer justify-center bg-[length:200%] font-medium text-white dark:text-black transition-all duration-500 ease-in-out border-white hover:border-none before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:opacity-75 before:transition-opacity before:duration-1000 hover:before:opacity-100 hover:scale-[1.02] after:absolute after:inset-0 after:rounded-md after:p-[2px] after:bg-[linear-gradient(121.31deg,#8B5CF6_-12.16%,#EC4899_48.37%,#F59E0B_112.89%)] after:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] after:[-webkit-mask-composite:destination-out] after:[mask-composite:exclude] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 dark:bg-white bg-black dark:hover:ring-0 [&>span]:relative [&>span]:z-10 rounded-md px-8 h-12 lg:text-md sm:text-sm flex items-center">
            More FAQ's
              <svg className="w-4 h-4 ms-2 group-hover:translate-x-1 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </button>
          </Link>
      </div>
    </div>
  );
}

