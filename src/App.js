import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Greeting from './components/Greeting';

import './App.css';

const App = () => (
  <BrowserRouter>
    <nav>
      <NavLink to="/random-greeting">Greeting</NavLink>
    </nav>
    <div>
      <Routes>
        <Route exact path="/random-greeting" element={<Greeting />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
