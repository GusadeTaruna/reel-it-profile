import React from "react";
import Main from "./components/Main";
import Hero from "./components/Hero";
import About from "./components/About"
import Reason from "./components/Reason";

function App() {
  return (
    <Main>
      <Hero />
      <About />
      <Reason />
    </Main>
  );
}

export default App;
