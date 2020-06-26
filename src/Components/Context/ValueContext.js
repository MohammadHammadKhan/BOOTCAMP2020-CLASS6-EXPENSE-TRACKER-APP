import React, { createContext,useContext } from 'react';

const transactions=[10,20,30,-10,-5];
// const initialState={
//     transactions:[{id:1, description:'books', transactionAmount:300},
//                   {id:2, description:'books', transactionAmount:400}

//     ]
//  }
const initialState={
    transactions:[ ]
 }
const initialTransState=[1,4,5,6];
const transContext=createContext(initialTransState)



const globalContext=createContext(initialState,()=>{});

export let ValueReducer=(state, action)=>{
    let addTransaction=useContext(globalContext);
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
                    state.filter(transaction=>transaction.id!=action.id)]
                              }
                              };

export default globalContext;
