import logo from './logo.svg';
import './App.scss';
import Contact from './components/Contact/Index';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
