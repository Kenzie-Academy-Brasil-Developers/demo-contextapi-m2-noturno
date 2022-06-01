import "./App.css";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
