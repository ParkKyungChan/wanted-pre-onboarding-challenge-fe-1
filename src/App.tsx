import React from "react";
import {GlobalStyle} from "./common/GlobalStyle";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RoutePath} from "./constants";

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Routes>
        <Route path={RoutePath.LOGIN} element={} />
        <Route path={RoutePath.SIGNUP} element={} />
      </Routes> */}
    </Router>
  );
}

export default App;
