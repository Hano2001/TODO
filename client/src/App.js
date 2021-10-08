import "./App.css";

function App() {
  let list = fetch("http://localhost:3000/todo").then((res) => res.json());

  async function window() {
    let test = await list;

    console.log(test);
  }
  return (
    <div className="App">
      <h1>TODO START</h1>

      <button onClick={window}>KLICKA HÄR</button>
    </div>
  );
}

export default App;
