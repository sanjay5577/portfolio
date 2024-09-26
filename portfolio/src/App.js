import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import './App.css';
import Experience from './Components/Experience/Experience';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <Experience />
     <MyWork/>
     <Contact/>
     <Footer />
    </div>
  );
}

export default App;
