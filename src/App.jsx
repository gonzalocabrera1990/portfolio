import './App.css';
import { Routes, Route } from 'react-router-dom';
//COMPONENTS
import { Home } from './components/Home'
import { ProjectDetail } from './components/ProjectDetail';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
