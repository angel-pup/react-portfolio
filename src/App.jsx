import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Nav from './components/Navbar/Nav';

import 'bulma/css/bulma.min.css';

import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = (page) => {
    switch(page) {
      case 'AboutMe':
        return <AboutMe />
      case 'Portfolio':
        return <Portfolio />
      case 'Resume':
        return <Resume />
      default:
        return <Contact />
    }
  }

  return (
    <div className="App">
      <Nav 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      />
      { renderPage(currentPage) }
    </div>
  );
}

export default App;