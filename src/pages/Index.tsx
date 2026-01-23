import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default Index