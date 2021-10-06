import "./App.css";

function App() {
  let kittens = fetch("http://localhost:3000/kittens").then((res) =>
    res.json()
  );

  async function window() {
    let test = await kittens;
    let testArray = [];

    test.forEach((element) => {
      testArray.push(element);
    });
    //let test2 = JSON.stringify(test[1]);
    //console.log(await Object.keys(kittens).length);
    alert(testArray[1].name);
  }
  return (
    <div className="App">
      <h1>TODO START</h1>
      <button onClick={window}>KLICKA</button>
    </div>
  );
}

export default App;
