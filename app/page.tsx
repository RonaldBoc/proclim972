import Hero from './components/Hero';
import Expertise from './components/Expertise';
import TwoColumnSection from './components/TwoColumnSection';
import Services from './components/Services';
import Products from './components/Products';
import Partners from './components/Partners';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <TwoColumnSection />
      <Services />
      <Products />
      <Partners />
      <ContactSection />
    </>
  );
}
