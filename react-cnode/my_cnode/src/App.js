import React from 'react';
import IndexRouter from "./router/router.js"
import MainHeader from "./view/main-header.js";
import MainFooter from "./view/main-footer.js";
import "./view/index.css";

function App() {
  return (
    <div className="page">
      <MainHeader />
      <div id="mainPanel">
        <IndexRouter />
      </div>
      <MainFooter />

    </div>
  );
}

export default App;
