import React,{useContext,useReducer}from 'react';
import globalContext,{ValueReducer} from './Context/ValueContext'



function Transaction({ id, description,  transactionAmount}){
    let addTransaction=useContext(globalContext);
    let [state, dispatch]=useReducer(ValueReducer,addTransaction[0]);
    console.log(state);   
    function delTransfun(id){
        
        dispatch(
            {
                type:'DelTrans',
                id:id
                
            }
        );
        console.log(`dispatch deltrans:${addTransaction[0].id}`)
        
    };
    const sign=transactionAmount>0? '+':'-'
    const transactionType=transactionAmount>0? 'plus':'minus'
    return(
        <div>
            <li className={transactionType} >  
            {description}
            <span>{sign}${Math.abs(transactionAmount)}</span>
            <button className="delete-btn"
                    onClick={()=>delTransfun(id)}>
                X
            </button>
        </li>
        </div>
    );
}

export default Transaction;