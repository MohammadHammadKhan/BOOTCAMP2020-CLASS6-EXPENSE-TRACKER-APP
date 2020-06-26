import React, { useState} from 'react';
import './App.css';
import globalContext from './Components/Context/ValueContext'
import Header from './Components/Header';
import Balance from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import {AddTransaction} from './Components/AddTransaction'
import { Footer } from './Components/Footer';
import { History } from './Components/History';

function App() {
 
  let value= useState([]);
  return (
        <globalContext.Provider value={value}>
          <Header></Header>
          <div className='container'>
            <Balance></Balance>
            <IncomeExpense></IncomeExpense>
            <History></History>
            <AddTransaction></AddTransaction>
            <Footer></Footer>
          </div>
        </globalContext.Provider>
  );
}

export default App;
