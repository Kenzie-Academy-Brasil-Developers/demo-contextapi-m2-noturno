import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Counter />
      </header>
    </div>
  );
}

export default App;
