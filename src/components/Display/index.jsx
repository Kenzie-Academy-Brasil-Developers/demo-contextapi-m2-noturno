import { useCounter } from "../../providers/Counter";
import { useUser } from "../../providers/User";

const Display = () => {
  const { counter } = useCounter();
  const { user } = useUser();

  return (
    <>
      <h1>{counter}</h1>
      <h2>{user}</h2>
    </>
  );
};

export default Display;
