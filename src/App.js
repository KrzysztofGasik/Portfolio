import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome/Welcome";
import LastProject from "./components/LastProject/LastProject";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./scss/_main.scss";

function App() {
  return (
    <div className="App theme__light">
      <Navigation />
      <Welcome />
      <LastProject />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
