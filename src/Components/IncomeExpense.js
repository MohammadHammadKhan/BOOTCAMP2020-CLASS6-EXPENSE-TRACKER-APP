import React, {useContext} from 'react'
import globalContext from './Context/ValueContext'

export const IncomeExpense = () => {
    const transactions=useContext(globalContext);
    // const transactions=[10,20,30,-10,-5];
    console.log(`transactions array:${transactions}`);
    // const transactionAmounts=transactions.map(transaction=>transaction.transactionAmount);
    // const transactionAmounts=transactions.map(transaction=>transaction.transaction);
    //    const income=transactionAmount.filter(transaction=>transaction.transactionAmount>0)
//     .reduce((acc,transaction)=>(acc=++transaction),0);

//     const expense=transactionAmount.filter(transaction=>transaction.transactionAmount>0)
//     .reduce((dec,transaction)=>(dec=--transaction),0)
        const transactionAmounts=transactions[0].map(transaction=>transaction.transactionAmount);
        const income=transactionAmounts.filter(transaction=>transaction>0)
                                      .reduce((acc,transaction)=>(acc=acc+transaction),0);
                                             
        const expense=transactionAmounts.filter(transaction=>transaction<0)
                                      .reduce((acc,transaction)=>(acc=acc-transaction),0);
    return (
        <div className='inc-exp-container'>
            <div className='income'>
                <h4>INCOME</h4>
                <p className='money plus'>${income}</p>
            </div>
            <div className='expense'>
                <h4>EXPENSE</h4>
                <p className='money minus'>${expense}</p>

            </div>
            
        </div>
    )
}
