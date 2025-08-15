import { Link, Outlet } from '@tanstack/react-router';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-container">
          <h1>E-commerce Platform</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
