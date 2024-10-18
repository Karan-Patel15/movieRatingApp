import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  auth: false,
  setAuth: (auth: boolean) => {},
});

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
