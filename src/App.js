import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import About  from './components/About'
import Contact from './components/Contact';
import Career from './components/Career';
import Home from './components/Home';
import Product from './components/Products/Product';
import Quality from './components/Quality';
import BrassBottle from './components/BrassHardware/BrassBottle';
import BrassPipeFitting from './components/BrassPipeFitting';


function App() {
  return (    
      <div className="App">
          <Router>
          <Header /> 
          <section className="web-body">            
            <Routes>              
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/product" element={<Product />} />
            <Route path="/brassHardware/brassBottle" element={<BrassBottle />} />
            <Route path="/brassPipeFitting" element={<BrassPipeFitting />} />
            <Route path="/quality" element={<Quality />} />
            </Routes>  
          </section>               
          <Footer />
        </Router>
      </div>
  )
}

export default App;
