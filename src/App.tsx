import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Games } from './components/Games';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <Hero />
      <Portfolio />
      <Games />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
