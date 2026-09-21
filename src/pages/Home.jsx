import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import FeatureCards from '../components/FeatureCards.jsx'
import ComplianceFramework from '../components/ComplianceFramework.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ISMSSection from '../components/ISMSSection.jsx'
import ChainOfCustody from '../components/ChainOfCustody.jsx'
import ContactSection from '../components/ContactSection.jsx'
import ClientLogos from '../components/ClientLogos.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'
import useScrollReveal from '../hooks/useScrollReveal.js'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <ComplianceFramework />
        <ServicesSection />
        <ISMSSection />
        <ChainOfCustody />
        <ClientLogos />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
