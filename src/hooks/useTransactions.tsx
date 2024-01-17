import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as
  TransactionsContextData);

const TRADE_INFO = 'coffeeDelivery:cartItems'


export function TransactionsProvider({ children }: TransactionsProviderProps) {


  const [transactions, setTransactions] = useState<Transaction[]>(() => {

    const storagedtransactions = localStorage.getItem(TRADE_INFO);
    if (storagedtransactions) {
      return JSON.parse(storagedtransactions)
    } else {
      return []
    };
  })




  useEffect(() => {

    localStorage.setItem(TRADE_INFO, JSON.stringify(transactions))

  }, [transactions])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  async function deleteTransaction(id: number) {
    const newTransactions = transactions.filter(t => t.id !== id);

    setTransactions([
      ...newTransactions

    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
      {children};
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context;
}