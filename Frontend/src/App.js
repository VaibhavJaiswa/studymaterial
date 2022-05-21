import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import ReadBook from './components/ReadBook';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div>
      
      <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/readbook/:book" element={<ReadBook></ReadBook>}></Route>
          <Route path="*" element={<div>No Route Found</div>}></Route>
        </Routes>
      </Router>
      </CookiesProvider>



    </div>
  );
}

export default App;
