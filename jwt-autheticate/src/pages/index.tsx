import { GetServerSideProps } from "next";
import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/home.module.scss";
import { parseCookies } from "nookies";
import { withSSRGuest } from "../utils/withSSRGuest";

const Home = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    signIn(data);
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async (ctx) => {
    return {
      props: {},
    };
  }
);

export default Home;
