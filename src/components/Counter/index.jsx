import { useCounter } from "../../providers/Counter";
import { useUser } from "../../providers/User";

const Counter = () => {
  const { addCounter, subCounter } = useCounter();
  const { setUser } = useUser();
  return (
    <>
      <input onChange={(e) => setUser(e.target.value)} />
      <button onClick={addCounter}>Adiciona 1</button>
      <button onClick={subCounter}>Subtrai 1</button>
    </>
  );
};

export default Counter;
