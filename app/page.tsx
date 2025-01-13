
import AIHiringProcess from "./components/AIHiringProcess";
import AIStaffingSolutions from "./components/AIStaffingSolutions";
import CallToAction from "./components/CallToAction";
import CandidateAssessments from "./components/candidate-assessments";
import DreamTeamBuilder from "./components/DreamTeamBuilder";
import { Footer } from "./components/Footer";
import InterviewProcess from "./components/interview-process";
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
  <InterviewProcess/>
  <AIHiringProcess/>
  <DreamTeamBuilder/>
   <FAQ/>
   <Footer/>
   </>

  );
}

