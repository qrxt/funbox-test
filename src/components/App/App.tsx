import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "./App.styles";
import Layout from "components/Layout";
import VisuallyHidden from "components/VisuallyHidden";
import GoodsPage from "components/pages/GoodsPage";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <VisuallyHidden as="h1">
          Самый лучший магазин кошачьей еды для кошек
        </VisuallyHidden>

        <GoodsPage />
      </Layout>
    </>
  );
}

export default App;
