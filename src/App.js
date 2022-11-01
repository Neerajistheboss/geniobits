import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;