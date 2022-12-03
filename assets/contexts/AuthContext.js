import React, { createContext, useState, useContext } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async () => {
    setIsAuthenticated(true);
  };

  const signOut = async () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}