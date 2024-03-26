import React from "react";
import { SignIn, SignUp, DashBoard} from "./components/index.js";

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
