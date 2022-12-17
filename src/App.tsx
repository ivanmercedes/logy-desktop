import ItemDebug from "./components/ItemDebug";
import Layout from "./components/Layout";

const { ipcRenderer } = window.require("electron");

function App() {
  const testEvent = () => {
    ipcRenderer.send("test-event", JSON.stringify({ name: "pepe" }));
  };

  const showLogs = false;

  if (showLogs) {
    return (
      <Layout>
        <ItemDebug color="border-logy-green" />
        <ItemDebug color="border-logy-yellow" />
        <ItemDebug color="border-logy-red" />
        <ItemDebug color="border-logy-blue" log="hola" />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="h-full grid place-content-center text-white ">
        <h1 className="text-5xl font-bold text-white/50 text-center">No Logs available</h1>
        <div className="flex flex-col gap-2 mt-20">
          <div className="flex gap-2 items-center">
            <img src="tips.svg" alt="tips" className="w-4" />
            <span className="text-2xl font-semibold">Tips</span>
          </div>
          <label>
            Press
            <span className="bg-white/20 rounded-lg mx-2 font-semibold"> Shift + Window + L </span>
            to show and hide Logy
          </label>
        </div>
      </div>
    </Layout>
  );
}

export default App;
