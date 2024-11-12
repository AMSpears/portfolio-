import * as React from "react"
import Header from '../components/layout/Header';
import AboutSection from "../components/specific/AboutSection";
import Footer from '../components/layout/Footer';
import bioImage from '../images/bio-image-placeholder.png';

const AboutPage = () => {
  return (
    <main className="bg-banner-gradient bg-primary">
      <Header />
      <AboutSection bioImage={bioImage} />
      <Footer />
    </main>
  )
}
export default AboutPage

export const Head = () => <title>About</title>
