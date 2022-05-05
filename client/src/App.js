import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Contact from './components/Contact/Index';
import CategoryList from './components/CategoriesList/CategoryList';
import FeaturedItemsList from './components/FeaturedList/FeaturedItemsList';
import TextBoxItem from './components/TextBoxes/TextBoxItem';

function App() {

  const { state } = useApplicationData()

  return (
    <main className="App">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {state.features ?
      <FeaturedItemsList state={state} />
      : null}

      {state.categories ? 
      <CategoryList state={state}/>
      : null}

      <TextBoxItem />
      
    </main>
  );
}

export default App;
