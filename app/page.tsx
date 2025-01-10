
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/hero-section";
import Navbar from "./components/Navbar";
import { FAQSection } from "./components/ui/faq-section";
import { RainbowButton } from "./components/ui/rainbow-button";

export default function Home() {
  const faqs = [
   {
  question: "How can I reach out for help?",
  answer: "You can reach out to our support team through our contact page or by emailing support@example.com."
},
{
  question: "What's the typical response time ?",
  answer: "We typically respond within 24 hours during business days."
},
{
  question: "What should I do if there's no response yet?",
  answer: "If you haven't received a response within 48 hours, please check your spam folder or try contacting us through a different channel."
},
{
  question: "What candidate levels can your platform evaluate?",
  answer: "Our platform can evaluate candidates at all levels, from entry-level to executive positions."
},
{
  question: "Is your platform suitable for startups or enterprises?",
  answer: "Our platform is designed to be scalable and can accommodate both startups and large enterprises."
},
{
  question: "Do you offer refunds?",
  answer: "Yes, we offer a 30-day money-back guarantee. Please refer to our refund policy for more details."
}
  ]

  return (
   <>
   <Navbar/>
   <HeroSection/>
   <section className="py-24 relative overflow-hidden bg-background ">
          <div className="container mx-auto px-4">
            <FAQSection faqs={faqs}/>
          </div>
          <RainbowButton className="ml-96 mt-8">
            More FAQ's
            <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
            </path>
            </svg>
          </RainbowButton>
        </section>
   <Footer/>
   </>

  );
}

