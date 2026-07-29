import './App.css';
import { Routes, Route } from 'react-router-dom';
//COMPONENTS
import { Home } from './components/Home'
import { ProjectDetail } from './components/ProjectDetail';
import { ContactEmail } from './components/EmailSending';


function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<ProjectDetail />} />
        <Route path="/contact/email" element={<ContactEmail />} />
      </Routes>
    </div>
  );
}

export default App;
