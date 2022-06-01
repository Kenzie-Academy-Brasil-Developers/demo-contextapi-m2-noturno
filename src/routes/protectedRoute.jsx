import { Redirect } from "react-router-dom";
import { Route as CommonRoute } from "react-router-dom";
import { useUser } from "../providers/User";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useUser();

  return (
    <CommonRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;

// rota é privada e o user está logado = OK
// rota é privada e o user não está logado = /login
// rota não é privada e o user está logado = /dashboard
// rota não é privada e o user não está logado = Ok
