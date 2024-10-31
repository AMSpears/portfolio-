import * as React from "react"
import Header from '../components/layout/Header';

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
