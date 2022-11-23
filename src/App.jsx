import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";

function App() {

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
    </div>
  );
}

export default App;
