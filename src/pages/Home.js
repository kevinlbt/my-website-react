import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import About from "../components/About"
import Contact from "../components/contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="high">
        <NavBar />
        <Header />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
    </main>
      
    
  );
}

export default Home;
