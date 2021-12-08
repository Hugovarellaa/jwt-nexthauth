import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";
import { createServer, Model } from "miragejs";
import { useState } from "react";
import Modal from "react-modal";
import { NewModal } from "./components/NewModal";
import { TransactionProvider } from "./useTransaction";

Modal.setAppElement("#root");

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freenlance de web site",
          amount: 4100,
          category: "Dev",
          type: "deposit",
          createAt: new Date("2021-12-05 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1200,
          category: "Casa",
          type: "withdraw",
          createAt: new Date("2021-12-15 22:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const response = JSON.parse(request.requestBody);
      return schema.create("transaction", response);
    });
  },
});

export function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }
  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyled />
      <Header isOpen={handleOpenModal} />
      <Dashboard />
      <NewModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} />
    </TransactionProvider>
  );
}
