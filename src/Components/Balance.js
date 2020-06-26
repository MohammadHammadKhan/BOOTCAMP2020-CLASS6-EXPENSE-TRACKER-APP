import React, { useContext } from 'react';
import globalContext from './Context/ValueContext';

function Balance(){

    const transactions=useContext(globalContext);
    console.log(`transactions context:${transactions}`);
    // console.log({transactions:amount});
    // console.log(globalContext);
// const transactions=[10,20,30]
    const amounts = transactions[0].map(transaction => transaction.transactionAmount);
//    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc = acc + item), 0);
    // console.log(total);
    return(
        <div >
            <h4>CURRENT BALANCE:</h4>
            <h1 id="balance">${total}</h1>
            <br/>
        </div>
    );
}

export default Balance;