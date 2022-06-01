import { CounterProvider } from "./Counter";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CounterProvider>{children}</CounterProvider>
    </UserProvider>
  );
};

export default Providers;
