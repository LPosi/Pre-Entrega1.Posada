import { useState } from "react";
import Home from "./pages/Home";
import Logo from "./assets/logo.png";
import "./App.css";
import Counter from "./components/common/Counter";

function App() {
  return (
    <>
      {/*<Header />*/}
      {/*<Nav />*/}

      <div>
        {/*<Aside />*/}
        <Home />
        <Counter />
      </div>

      {/*<Footer />*/}
    </>
  );
}

export default App;
