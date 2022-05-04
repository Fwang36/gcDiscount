import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Contact from './components/Contact/Index';
import CategoryList from './components/CategoriesList/CategoryList';


function App() {

  const { state } = useApplicationData()

  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {state ? 
      <CategoryList state={state}/>
      : null}
    </div>
  );
}

export default App;
