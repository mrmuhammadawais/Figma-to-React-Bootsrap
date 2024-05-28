
// import './App.css';
import {NavBar} from '../src/components/Navbar'
// import {belowtoNav} from './components/BelowNav'
import {About} from './components/about'
import { Banner } from './components/Banner';
import { Footer } from './components/footer';
import '../../interface/src/assets/scss/stylesheet.scss';

// import { Form } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
     <NavBar/>
   
      <Banner/>
     <About/> 
     <Footer/>
    </div>
  );
}

export default App;
