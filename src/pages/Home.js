import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <main className="high">
        <NavBar />
        <Header />
        <Skills />
        <Portfolio />
    </main>
      
    
  );
}

export default Home;
