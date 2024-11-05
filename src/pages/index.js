import * as React from "react"
import Header from '../components/layout/Header';
import HomeIntroBanner from '../components/specific/HomeIntroBanner';
import bioImage from '../images/bio-image-placeholder.png';
import HomeAbout from '../components/specific/HomeAbout';


const IndexPage = () => {
  return (
    <main className="bg-primary">
      <Header />
      <HomeIntroBanner bioImage={bioImage} />
      <HomeAbout />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
