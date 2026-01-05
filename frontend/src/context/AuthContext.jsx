
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // TEMP: replace later with real login logic
  const [user, setUser] = useState({
    isAuthenticated: true,
    role: "user", // "admin" or "user"
  });

  const login = (role) => {
    setUser({ isAuthenticated: true, role });
  };

  const logout = () => {
    setUser({ isAuthenticated: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
