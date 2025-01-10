import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem className="border-input rounded-lg mt-2 [&[data-state=open]]:border-black border-[1px] dark:[&[data-state=open]]:border-gray-400 dark:border-gray-700" value={''}>
      <AccordionTrigger className="flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180 px-4 py-4 text-base sm:text-lg font-medium text-left no-underline hover:no-underline">
        {question}
        <ChevronDown className="h-4 w-4 shrink-0 transition-all duration-300 ease-in-out" />
      </AccordionTrigger>
      <AccordionContent className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-4 pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

