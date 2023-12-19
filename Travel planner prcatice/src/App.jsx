import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SearchResult from './pages/SearchResult';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    // <div><SignUp /></div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/searchResult" element={isAuthenticated? <SearchResult/>: <Navigate to="/login"/>} />
      </Routes>
    </Router>
      
  );
};

export default App


