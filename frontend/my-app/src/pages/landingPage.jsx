import Nav from "../components/landing/Nav.jsx";
import Hero from "../components/landing/Hero.jsx";
import Problem from "../components/landing/Problem.jsx";
import Solution from "../components/landing/Solution.jsx";
import HowItWorks from "../components/landing/HowItWorks.jsx";
import Features from "../components/landing/Features.jsx";
import Demo from "../components/landing/Demo.jsx";
import TechStack from "../components/landing/TechStack.jsx";
import WhyMatters from "../components/landing/WhyMatters.jsx";
import Testimonials from "../components/landing/Testimonials.jsx";
import CTABanner from "../components/landing/CTABanner.jsx";
import Footer from "../components/landing/Footer.jsx";

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Demo />
      <TechStack />
      <WhyMatters />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
