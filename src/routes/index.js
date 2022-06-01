import { Switch } from "react-router-dom";
import Route from "./protectedRoute";
import { useUser } from "../providers/User";

import CounterPage from "../pages/Counter";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const Routes = () => {
  const { token } = useUser();
  // token = "" -> false => !token -> true => !!token => false
  // token = "sffasdvsvsdvs" -> true -> !!token => true

  //   console.log("token sem alteração", token);
  //   console.log("alterando o booleano do token", !token);
  //   console.log("retornando o boolean de token", !!token);

  return (
    <Switch>
      <Route isPrivate={!!token} exact path="/" component={CounterPage} />
      <Route isPrivate={true} path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route isPrivate={!!token} component={NotFound} />
    </Switch>
  );
};

export default Routes;
