const { ipcRenderer } = window.require("electron");

function App() {
  const testEvent = () => {
    ipcRenderer.send("test-event", JSON.stringify({ name: "pepe" }));
  };

  return (
    <div className="App">
      <h1 className="text-red-500">Hello, world!</h1>
      <button
        className="bg-blue-500 p-2 text-white"
        onClick={() => testEvent()}
      >
        test
      </button>
    </div>
  );
}

export default App;
