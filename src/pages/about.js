import * as React from "react"
import Header from '../components/layout/Header';
import AboutSection from "../components/specific/AboutSection";
import bioImage from '../images/bio-image-placeholder.png';
import Services from "../components/specific/Services";
import serviceIcon from '../images/service-icon.svg';
import ExperienceSection from "../components/specific/ExperienceSection";
import Footer from '../components/layout/Footer';
import useReveal from "../hooks/useReveal";
const AboutPage = () => {
  useReveal();
  return (
    <main className="bg-banner-gradient bg-primary">
      <Header />
      <AboutSection bioImage={bioImage} />
      <Services serviceIcon={serviceIcon}/>
      <ExperienceSection />
      <Footer />
    </main>
  )
}
export default AboutPage

export const Head = () => <title>About</title>
