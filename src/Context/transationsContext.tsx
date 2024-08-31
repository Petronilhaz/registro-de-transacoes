import { ReactNode, createContext, useEffect, useState } from "react";

export interface ITransaction {
    type: string,
    author: string,
    product: string,
    transactionValue: number,
    description?: string,
    date?: string,
}

interface TransationsContextProps {
    transactions: ITransaction[],
    addTransaction: (newTransation: ITransaction) => void,
    setTransactions: (transactions: ITransaction[])=> void
}

const initialValues = {
    transactions: [],
    addTransaction: () => {},
    setTransactions: () => {}
}

export const TransactionsContext = createContext<TransationsContextProps>(initialValues)

export const TransactionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    
    useEffect(() => {
        localStorage.setItem("localTransactions", JSON.stringify(transactions));
    }, [transactions]);

    console.log("Local: ", localStorage.getItem("localTransactions"))


    const addTransaction = (newTransaction: ITransaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction])
    }

    const ContextValue = {
        transactions,
        addTransaction,
        setTransactions
    }

   return (
    <TransactionsContext.Provider value={ContextValue}>
        {children}
    </TransactionsContext.Provider>
   )
}
