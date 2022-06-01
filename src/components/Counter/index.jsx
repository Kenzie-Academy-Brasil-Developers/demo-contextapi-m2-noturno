import { useCounter } from "../../providers/Counter";

const Counter = () => {
  const { addCounter, subCounter } = useCounter();
  return (
    <>
      <button onClick={addCounter}>Adiciona 1</button>
      <button onClick={subCounter}>Subtrai 1</button>
    </>
  );
};

export default Counter;
