import { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

type credentials = {
  email: string;
  password: string;
};

interface AuthContextData {
  signIn: (credentials: credentials) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({ email, password }: credentials) {
    console.log({ email, password });
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
