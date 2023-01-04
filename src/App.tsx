import React from 'react';
import { GlobalStyle } from './common/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoutePath } from './constants';
import GlobalNavigationBar from './components/GlobalNavigationBar';
import LogInPage from './pages/LogInPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <GlobalNavigationBar />
      <Routes>
        <Route path={RoutePath.LOGIN} element={<LogInPage />} />
        {/* <Route path={RoutePath.SIGNUP} element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
