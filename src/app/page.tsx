import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import CaseStudies from "@/components/CaseStudies";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Clients />
      <CaseStudies />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}
