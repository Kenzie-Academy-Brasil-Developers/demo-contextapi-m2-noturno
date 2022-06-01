import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("demo") || "");

  const login = (data) => {
    fetch("").then((res) => {
      setToken(res.data);
    });
  };

  return (
    <UserContext.Provider value={{ token, user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
