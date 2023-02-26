import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Nav from './components/Navbar/Nav';
import 'bulma/css/bulma.min.css';

import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');


  return (
    <div className="App">
      <Nav 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      />
      
      {
        currentPage === 'AboutMe'
          ? ( <AboutMe />)
          : currentPage === 'Portfolio'
            ? (<Portfolio />)
            : currentPage === 'Resume'
              ? (<Resume />)
              : <Contact />
      }
    </div>
  );
}

export default App;