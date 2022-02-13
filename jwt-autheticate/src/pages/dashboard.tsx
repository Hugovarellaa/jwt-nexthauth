import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { setupApiClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useAuth();

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>dashboard : {user?.email}</h1>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    try {
      const apiClient = setupApiClient(ctx);
      const response = await apiClient.get("/me");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    return {
      props: {},
    };
  }
);
