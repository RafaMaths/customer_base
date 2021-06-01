import './App.css';
import { BrowserRouter,Router, Link } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Link to="/login" component={ Login }>Login</Link>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
