import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpeechToText from "./Page/SpeechToText";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpeechToText />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
