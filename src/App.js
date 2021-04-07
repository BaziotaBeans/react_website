import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import DesktopSection from './components/DesktopSection';
import CTASection from './components/CTASection';
import PartnersSection from './components/PartnersSection';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <FeaturesSection/>
        <DesktopSection/>
        <CTASection/>
        <PartnersSection/>
        <TestimonialSection/>
        <PricingSection/>
        <ContactSection/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
