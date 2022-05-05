import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Contact from './components/Contact/Index';
import CategoryList from './components/CategoriesList/CategoryList';
import FeaturedItemsList from './components/FeaturedList/FeaturedItemsList';

function App() {

  const { state } = useApplicationData()

  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {state.categories ? 
      <CategoryList state={state}/>
      : null}

      {state.features ?
      <FeaturedItemsList state={state} />
      : null}
    </div>
  );
}

export default App;
