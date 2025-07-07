import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import WorkshopsPage from './pages/WorkshopsPage';
import WorkshopDetailsPage from './pages/WorkshopDetailsPage';
import LoadingScreen from './components/LoadingScreen';
function RedirectOnReload() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, []);

  return null;
}

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <LoadingScreen />}
      <Router>
        <RedirectOnReload />
        <Routes>
          <Route path="/" element={<LandingPage setLoading={setLoading} />} />
          <Route path="/workshops" element={<WorkshopsPage setLoading={setLoading} />} />
          <Route path="/workshop/:id" element={<WorkshopDetailsPage setLoading={setLoading} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
