import React, {useContext} from 'react'
import globalContext from './Context/ValueContext'

export const IncomeExpense = () => {
    const transactions=useContext(globalContext);

    console.log(`transactions array:${transactions}`);

        const transactionAmounts=transactions[0].map(transaction=>transaction.transactionAmount);
        const income=transactionAmounts.filter(transaction=>transaction>0)
                                      .reduce((acc,transaction)=>(acc=acc+transaction),0).toFixed(2);
                                             
        const expense=transactionAmounts.filter(transaction=>transaction<0)
                                      .reduce((acc,transaction)=>(acc=acc-transaction),0).toFixed(2);
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
