import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// pages & components
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route path="/*" element={<h3>Page Not found!</h3>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
