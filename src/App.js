import Nav from "./Comp/Nav/Nav";
import Intro from "./Comp/Intro/Intro";
import Skills from "./Comp/Skills/Skills";
import Contect from "./Comp/Contect/Contect";
import Footer from "./Comp/Footer/Footer";
import About from "./Comp/About/About";
function App() {
  return (
    <div className="App"> 
    <Nav/>
    <Intro/>
    <About/>
    <Skills/>
    <Contect/>
    <Footer/>

 
    </div>
  );
}

export default App;
