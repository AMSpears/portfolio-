import * as React from "react"  
import Header from '../components/layout/Header';
import HomeIntroBanner from '../components/specific/HomeIntroBanner';
import bioImage from '../images/bio-image-placeholder.png';
import HomeIntro from '../components/specific/HomeIntro';
import HomeProjects from "../components/specific/HomeProjects";
import Footer from '../components/layout/Footer';
import useReveal from '../hooks/useReveal';
import Services from "../components/specific/Services";
import serviceIcon from '../images/service-icon.svg';
import introDivider from '../images/intro-divider.svg';
import ExperienceSection from "../components/specific/ExperienceSection";

const IndexPage = () => {
  useReveal();
  return (
    <main className="bg-banner-gradient bg-primary">
      <Header />
      <HomeIntroBanner bioImage={bioImage} />
      <HomeIntro introDivider={introDivider} />
      <Services serviceIcon={serviceIcon}/>
      <HomeProjects />
      <ExperienceSection />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
