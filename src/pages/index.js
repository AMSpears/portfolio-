import * as React from "react"
import Header from '../components/layout/Header';
import HomeIntroBanner from '../components/specific/HomeIntroBanner';
import bioImage from '../images/bio-image-placeholder.png';
import HomeAbout from '../components/specific/HomeAbout';
import HomeProjects from "../components/specific/HomeProjects";

const IndexPage = () => {
  return (
    <main className="bg-primary">
      <Header />
      <HomeIntroBanner bioImage={bioImage} />
      <HomeAbout />
      <HomeProjects />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
