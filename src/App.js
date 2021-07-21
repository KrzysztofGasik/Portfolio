
// import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

import './scss/_main.scss';

function App() {
  return (
    // <Router>
      <div className='App'>
        <Navigation />
        <Welcome />
        <FeaturedProject />
        <Skills />
        <Projects />
      </div>
    // </Router>
  );
}

export default App;
