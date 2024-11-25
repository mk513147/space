import './App.css';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Navbar from './Components/Navbar';
import Crew from './Components/Crew';
import Technology from './Components/Technology';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  const getBackgroundClass = () => {
    switch (location.pathname) {
      case '/':
        return 'background-home';
      case '/destination':
        return 'background-destination';
      case '/crew':
        return 'background-crew';
      case '/technology':
        return 'background-technology';
      default:
        return 'background-default';
    }
  }

  return (
    <div className={`app-container  ${getBackgroundClass} background`}>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
