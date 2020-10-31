import '@fortawesome/fontawesome' ;
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core';
import 'bulma/css/bulma.css'

import './App.css';
import {data} from './data';
import Hero from './components/Hero';

function App() {
  const filters = {
    dateFrom: data.today, // Proviene del archivo data.js
    dateTo: new Date(data.today.valueOf() + 86400000),
    country: 'Argentina',
    price: 1000,
    rooms: 5
  }
  return (
    <Hero filters={ filters } />
  );
}

export default App;
