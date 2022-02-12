import Router from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}
type User = {
  email: string;
  permissions: string[];
  roles: string[];
};
interface AuthContextData {
  signIn: (credentials: credentials) => Promise<void>;
  user: User | undefined;
  isAuthenticated: boolean;
}

type credentials = {
  email: string;
  password: string;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: credentials) {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = response.data;

      setUser({
        email,
        permissions,
        roles,
      });
      Router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
