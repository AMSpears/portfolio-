import * as React from "react"
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactForm from "../components/forms/ContactForm";


const ContactPage = () => {
  return (
    <main className="bg-banner-gradient bg-primary">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  )
}
export default ContactPage

export const Head = () => <title>Contact</title>
