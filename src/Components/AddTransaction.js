import React, { useState, useContext, useReducer } from 'react'
import Transaction from './Transaction'
import globalContext from './Context/ValueContext'
import ValueReducer from './Context/ValueContext'


export const AddTransaction = () => {
   
    const   [description, setDescription]=useState('');
    const   [transactionAmount, settransactionAmount]=useState();

    let addTransaction=useContext(globalContext);
    //  ()=>{addTransaction[1](
    //                         [...addTransaction[0],{
    //                         id:action.id,
    //                         description:action.description,
    //                         transactionAmount:action.transactionAmount
        
    //                         }]  )   };
    let [state, dispatch]=useReducer((state,action)=>{
       action.transactionAmount>0?
                                    (addTransaction[1](
                                        [...addTransaction[0],{
                                        id:action.id,
                                        description:action.description,
                                        transactionAmount:action.transactionAmount
                                        
                                        }])):
                                    (addTransaction[1](
                                        [...addTransaction[0],state.filter(transaction=>transaction.id!=action.id) ]))
        
        switch (action.type){
            case 'AddTrans':
                return [...state,{
                                id:action.id,
                                description:action.description,
                                transactionAmount:action.transactionAmount
                        
                             }]
                        
            case 'DelTrans':
                return [...state,
                   state.filter(transaction=>transaction.id!=action.id)            
                 ]
                // return [...state,{
                //                     state.filter(transaction=>transaction.transactions.id!=action.id)

                //                      }

                //             ]
            
                             }
                             },[]);
   
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction={
                id: new Date().getTime(),
                description,
                transactionAmount:+transactionAmount
        }
        addTransaction=newTransaction;

        dispatch(
            { 
                type: 'AddTrans',
                id:addTransaction.id,
                description:addTransaction.description,
                transactionAmount:addTransaction.transactionAmount
            });
           console.log(`newtrans:${addTransaction.transactionAmount}`)

    }



                console.log({description})
                console.log({transactionAmount})
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
