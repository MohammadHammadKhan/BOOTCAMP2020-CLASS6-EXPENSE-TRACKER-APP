import React,{useContext}from 'react';
import globalContext from './Context/ValueContext'



function Transaction({ id, description,  transactionAmount}){
    // const transactions =useContext(globalContext);
    const sign=transactionAmount>0? '+':'-'
    const transactionType=transactionAmount>0? 'plus':'minus'
    return(
        <div>
            <li className={transactionType} >  
            {description}
            <span>{sign}${Math.abs(transactionAmount)}</span>
            <button className="delete-btn"
                    >
                X
            </button>
        </li>
        </div>
    );
}

export default Transaction;