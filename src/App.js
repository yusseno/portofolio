import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social_media from './components/Social_media';
import Test from './components/Test';

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <Home />
      <About />
      <Experience />
      <Work />
      <Projects />
      <Contact />
      <Social_media />
      <Test />
    </div>
  );
}

export default App;
