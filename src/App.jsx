import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import "./App.css";

function App() {
  const [isDark, changeTheme] = useState("light");

  return (
    <>
      <Header isDark={isDark} changeTheme={changeTheme} />
      <Form />
    </>
  );
}

export default App;
