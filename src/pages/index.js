import * as React from "react"  
import Header from '../components/layout/Header';
import HomeIntroBanner from '../components/specific/HomeIntroBanner';
import bioImage from '../images/bio-image-placeholder.png';
import HomeIntro from '../components/specific/HomeIntro';
import HomeProjects from "../components/specific/HomeProjects";
import HomeAbout from '../components/specific/HomeAbout';
import Footer from '../components/layout/Footer';
import useReveal from '../hooks/useReveal';

const IndexPage = () => {
  useReveal();
  return (
    <main className="bg-banner-gradient bg-primary">
      <Header />
      <HomeIntroBanner bioImage={bioImage} />
      <HomeIntro />
      <HomeProjects />
      <HomeAbout />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
