import { createContext,useContext } from 'react';



const initialState={
    transactions:[ ]
 }





const globalContext=createContext(initialState,()=>{});

export let ValueReducer=(state, action)=>{
    let addTransaction=useContext(globalContext);
        
        if(action.type!=='DelTrans'){
                                 (addTransaction[1](
                                     [...addTransaction[0],{
                                     id:action.id,
                                     description:action.description,
                                     transactionAmount:action.transactionAmount                                
                                         }]))}
                                
        if(action.type==='DelTrans'){
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
            default:
                 return state;                     
                
                }
                                  };

           

export default globalContext;
