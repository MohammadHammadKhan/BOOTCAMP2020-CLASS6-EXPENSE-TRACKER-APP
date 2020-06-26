import React, { useState, useContext, useReducer } from 'react'
import globalContext from './Context/ValueContext'
import {ValueReducer} from './Context/ValueContext'


export const AddTransaction = () => {
   
    const   [description, setDescription]=useState('');
    const   [transactionAmount, settransactionAmount]=useState();

    let addTransaction=useContext(globalContext);
    let [state, dispatch]=useReducer(ValueReducer,addTransaction[0]);
    console.log(state);
    function addTransfun({id,description,transactionAmount}){
        dispatch(
            {
                type:'AddTrans',
                id:id,
                description:description,
                transactionAmount:transactionAmount

            }
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction={
                id: new Date().getTime(),
                description,
                transactionAmount:+transactionAmount
        }
        addTransaction=newTransaction;
        
            addTransfun({
                        id:addTransaction.id,
                        description:addTransaction.description,
                        transactionAmount:addTransaction.transactionAmount});
                       
                        }



    return (
        <div>
            <h3>Add Tansaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input
                       type="text"
                       id="description"
                       value={description} 
                       onChange={(e)=>setDescription(e.target.value)}
                       placeholder="Detail of Transaction"
                       required="required"
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='transactionamount'>
                        Transaction Amount
                    </label>
                    <input
                    type="number"
                    id='transactionamount'
                    value={transactionAmount}
                    onChange={(e)=>{settransactionAmount(e.target.value)}}
                    placeholder='Transaction Amount in USD'
                    required='required'
                    />
                </div>
                
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    );
}
