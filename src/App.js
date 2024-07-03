import { useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
      <div className="container">
          <Header />
          <Outlet />
      </div>
  );
}

export default App;
