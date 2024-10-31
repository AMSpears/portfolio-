import * as React from "react"
import Header from '../components/layout/Header';
import HomeIntroBanner from '../components/specific/HomeIntroBanner';
import bioImage from '../images/bio-image-placeholder.jpg';
import HomeAbout from '../components/specific/HomeAbout';

const pageStyles = {
  color: "#1A202C",
  backgroundColor: "#1A202C",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <HomeIntroBanner bioImage={bioImage} />
      <HomeAbout />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
