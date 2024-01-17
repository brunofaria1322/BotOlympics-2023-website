import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



import Home from './pages';
import ResultsPage from './pages/results';
import ResultsPageOther from './pages/results_test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/registration" element={<RegistrationPage/>} /> */}
        <Route path="/results" element={<ResultsPage/>} />
        <Route path="/results_test" element={<ResultsPageOther/>} />
      </Routes>
    </Router>
  );
}

export default App;
