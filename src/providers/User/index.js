import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@demo/user")) || {}
  );
  const [token, setToken] = useState(localStorage.getItem("@demo/token") || "");

  const login = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { user, token } = res.data;
        setUser(user);
        setToken(token);
        localStorage.setItem("@demo/user", JSON.stringify(user));
        localStorage.setItem("@demo/token", token);
        history.push("/dashboard");
      })
      .catch((err) => {
        if (
          err.response.data.message === "Incorrect email / password combination"
        ) {
          console.log("Senha e Email não conferem");
        }
      });
  };

  return (
    <UserContext.Provider value={{ token, user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
