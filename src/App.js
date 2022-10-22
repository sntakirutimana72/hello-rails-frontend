import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './components/Home';
import Greeting from './components/Greeting';

import './App.css';

const App = () => (
  <BrowserRouter>
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/random-greeting">Greeting</NavLink>
    </nav>
    <div className="flex-body">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/random-greeting" element={<Greeting />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
