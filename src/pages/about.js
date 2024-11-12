import * as React from "react"
import Header from '../components/layout/Header';
import AboutSection from "../components/specific/AboutSection";
import bioImage from '../images/bio-image-placeholder.png';
import Services from "../components/specific/Services";
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <main className="bg-banner-gradient bg-primary">
      <Header />
      <AboutSection bioImage={bioImage} />
      <Services/>
      <Footer />
    </main>
  )
}
export default AboutPage

export const Head = () => <title>About</title>
