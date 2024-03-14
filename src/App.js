import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Comp/Nav/Nav";
import Intro from "./Comp/Intro/Intro";
import Skills from "./Comp/Skills/Skills";
import Contect from "./Comp/Contect/Contect";
import Footer from "./Comp/Footer/Footer";
import About from "./Comp/About/About";
import Projects from "./Comp/Projecs/Projects";
function App() {
  return (
    <div className="App"> 

    <BrowserRouter>
    <Nav/>

<Routes>
<Route path="/" element={<Intro/>}/>
    

  <Route path="/Projects" element={<Projects/>}/>
  
  
    <Route path="/About" element={<About/>}/>
    
    <Route path="/Skills" element={<Skills/>}/>
    
    <Route path="/Contect" element={<Contect/>}/>
    
</Routes>

    <Footer/>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
