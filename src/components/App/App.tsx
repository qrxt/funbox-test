import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./App.styles";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  );
}

export default App;
