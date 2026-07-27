import './App.css';

//COMPONENTS
import { DrawNavBar } from './components/drawnav'
import { Cover } from './components/cover';
import { NavBar } from './components/navbar';
import { About } from './components/about';
import { Projects } from './components/projects';
import { SkillList } from './components/skills';
import { Contact } from './components/contact';

function App() {
  return (
    <div className="App" >
      <DrawNavBar />
      <NavBar />
      <Cover />
      <About />
      <Projects />
      <SkillList />
      <Contact />
    </div>
  );
}

export default App;
