import { ReactNode, createContext, useState } from "react";

interface ITransaction {
    type: string,
    author: string,
    product: string,
    transactionValue: number,
    description?: string,
    date?: number,
}

interface TransationsContextProps {
    transactions: ITransaction[],
    addTransaction: (newTransation: ITransaction) => void
}

const initialValues = {
    transactions: [],
    addTransaction: () => {}
}

export const TransactionsContext = createContext<TransationsContextProps>(initialValues)

export const TransactionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const addTransaction = (newTransaction: ITransaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction])
    }

    const ContextValue = {
        transactions,
        addTransaction
    }

   return (
    <TransactionsContext.Provider value={ContextValue}>
        {children}
    </TransactionsContext.Provider>
   )
}
