import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import "./App.css";
import Experience from "./Components/Experience/Experience";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "3px solid purple",
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
