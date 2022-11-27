import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";

function App() {
  sessionStorage.removeItem("tasktitle");
  sessionStorage.removeItem("numberAnswer");
  sessionStorage.removeItem("numberQuestion");

  return (
    <div className="App">
      <header className="">
        <div className="wrapper">
          <Navbar/>
        </div>
        <div className="">
          <img className="w-full h-[60vh]" src="/images/net.png" alt="" />
        </div>
      </header>
      <main className="wrapper">
        <Outlet/>
      </main>
      <footer className="bg-gray-400 py-5">
        <div className="wrapper">
          <div className="flex justify-center text-white">
            <div className="m-3">TJPK</div>
            <div className="m-3">Aijan</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
