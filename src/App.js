import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Page/Home';
import ABOUT from './Page/ABOUT.js';
import CONTECT from './Page/CONTECT';
import PROJECT from './Page/PROJECT';
import SKILLS from './Page/SKILLS';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/about' element={<ABOUT/>} />
      <Route path='/Contect' element={<CONTECT/>} />
      <Route path='/Projects' element={<PROJECT/>} />
      <Route path='/Skills' element={<SKILLS/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
