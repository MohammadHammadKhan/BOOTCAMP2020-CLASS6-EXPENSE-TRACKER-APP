import React, { useContext } from 'react';
import globalContext from './Context/ValueContext';

function Balance(){

    const transactions=useContext(globalContext);
  
    const amounts = transactions[0].map(transaction => transaction.transactionAmount);

    const total = amounts.reduce((acc, item) => (acc = acc + item), 0).toFixed(2);

    return(
        <div >
            <h4>CURRENT BALANCE:</h4>
            <h1 id="balance">${total}</h1>
            <br/>
        </div>
    );
}

export default Balance;