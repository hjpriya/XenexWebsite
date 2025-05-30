import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import About  from './components/About'
import Contact from './components/Contact';
import Home from './components/Home';
import BrassAutoComponents from './components/Products/BrassAutoComponents';
import BrassHardware from './components/Products/BrassHardware';
import BrassPipeFitting from './components/Products/BrassPipeFitting';


function App() {
  return (    
      <div className="App">
          <Router>
          <Header /> 
          <section className="web-body">            
            <Routes>              
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/brassAutoComponent" element={<BrassAutoComponents />} />
            <Route path="/brassHardware" element={<BrassHardware />} />
            <Route path="/brassPipeFitting" element={<BrassPipeFitting />} />             
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>  
          </section>               
          <Footer />
        </Router>
      </div>
  )
}

export default App;
