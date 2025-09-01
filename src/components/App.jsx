import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="page">
        <Header />

        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
