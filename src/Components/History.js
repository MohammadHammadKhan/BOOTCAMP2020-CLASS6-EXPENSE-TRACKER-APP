import React,{useContext} from 'react'
import Transaction from './Transaction'
import globalContext from './Context/ValueContext'

export const History = () => {
    const transactions =useContext(globalContext);
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className='list'>
                {transactions[0].map(transaction => 
                    (
                    <Transaction key={transaction.id} id={transaction.id} description={transaction.description} transactionAmount={transaction.transactionAmount}/>
                    )
                )}
            </ul>
        </div>
    )
}
