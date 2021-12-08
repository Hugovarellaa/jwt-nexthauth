import { createContext, ReactNode, useContext } from "react";
import { useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProviderProvider {
  children: ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createAt">;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transactionInput: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProvider) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionContext);
  return context;
}
