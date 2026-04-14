import Hero from "@/Components/Hero-Section";
import SkillsSection from "@/Components/SkillsSection";
import WhyInvestSection from "@/Components/WhyInvestSection";
import PracticalInstituteSection from "@/Components/PracticalInstituteSection";
import JobOrientedSection from "@/Components/JobOrientedSection";
import UpcomingCourses from "@/Components/UpcomingCourses";
import QuoteSection from "@/Components/QuoteSection";
import TestimonialSlider from "@/Components/TestimonialSlider";
import ContactUsForm from "@/Components/contactUsForm";
const Home = () =>{
  return(
    <>
            <Hero/>
        <SkillsSection/>
        <WhyInvestSection/>
        <PracticalInstituteSection/>
        <JobOrientedSection/>
        <UpcomingCourses/>
        <QuoteSection/>
        <TestimonialSlider/>
        <ContactUsForm/>
    </>
  )
}
export default Home;