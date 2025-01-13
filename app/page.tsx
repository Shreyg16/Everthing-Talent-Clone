
import AIStaffingSolutions from "./components/AIStaffingSolutions";
import CallToAction from "./components/CallToAction";
import CandidateAssessments from "./components/candidate-assessments";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import TrustedBy from "./components/trusted-by";
import FAQ from "./components/ui/FAQ";


export default function Home() {
  

  return (
   <>
   <Navbar/>
  <AIStaffingSolutions/>
  <CallToAction/>
  <TrustedBy/>
  <CandidateAssessments/>
   <FAQ/>
   <Footer/>
   </>

  );
}

