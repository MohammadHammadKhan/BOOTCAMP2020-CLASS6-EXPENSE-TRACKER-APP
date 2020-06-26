import React, { createContext,useContext } from 'react';

const transactions=[10,20,30,-10,-5];

const initialState={
    transactions:[ ]
 }
const initialTransState=[1,4,5,6];
const transContext=createContext(initialTransState)



const globalContext=createContext(initialState,()=>{});

export let ValueReducer=(state, action)=>{
    let addTransaction=useContext(globalContext);
        
        if(action.type!='DelTrans'){
                                 (addTransaction[1](
                                     [...addTransaction[0],{
                                     id:action.id,
                                     description:action.description,
                                     transactionAmount:action.transactionAmount                                
                                         }]))}
                                
        if(action.type=='DelTrans'){
                                 (addTransaction[1](
                                     [...addTransaction[0]=addTransaction[0].filter(transaction=>transaction.id!=action.id)]))
                                     console.log(`dispatch for deltrans start:${action.id}`)
                                   } 
         switch (action.type){
             case 'AddTrans':
                 return [...state,{
                                 id:action.id,
                                 description:action.description,
                                 transactionAmount:action.transactionAmount
                         
                                  }]
                         
             case 'DelTrans':
                 return [...state=state.filter(transaction=>transaction.id!=action.id)]
                                  }
                                  };

export default globalContext;
