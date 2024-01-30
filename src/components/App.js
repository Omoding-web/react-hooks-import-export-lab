import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import {username, city, image} from "/home/hp/react-hooks-import-export-lab/src/data/user.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} image={image} />
      <About />
    </div>
  );
}

export default App;
