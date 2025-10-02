import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

import About from './sections/About';
import Experiences from './sections/Experiences';
import Footer from './sections/Footer';
import NewHero from './sections/NewHero';
import Projects from './sections/Projects';

export default function App() {

  useEffect(() => {
    AOS.init({
      duration:1500,
      once: true,
    })
  })

  return (
    <main className="relative">
  {/* If you really need negatives, prefer -z-10/-z-20 etc.
     Also note Tailwind uses arbitrary values like z-[-1] (not -z-1) */}
  <img className="absolute top-0 right-0 opacity-60 z-0" src="/gradient.png" alt="Gradient-img" />
  <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] z-0" />
  
  <Header />
  <Hero />
  <NewHero/>
  <About/>
  <Projects/>
  <Experiences/>
  <Footer/>
</main>
  )
}