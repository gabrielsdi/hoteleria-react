import '@fortawesome/fontawesome' ;
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core';
import 'bulma/css/bulma.css'

import './App.css';
import {data} from './data';
import Hero from './components/Hero';
import Filters from './components/Filters';
import { useState } from 'react';


function App() {

  const initialValuesFilter = {
    dateFrom: data.today, // Proviene del archivo data.js
    dateTo: new Date(data.today.valueOf() + 86400000),
    country: 'Argentina',
    price: 1000,
    rooms: 5
 } ;


  const [filter, setFilter] = useState(initialValuesFilter);

  
  const handleChangeFilter = ( e ) => {
  const name = e.target.name ;
  const value = e.target.type === 'date' ? new Date( e.target.value ) : e.target.value ;
  setFilter(
      {
          ...filter,
          [name]: value
      }
  ) ;
} ;


  return (  
    <div> 
    <Hero filters={ filter } />   
    <Filters filters={filter}  onChange={handleChangeFilter}/>
    </div>
  );
}

export default App;
