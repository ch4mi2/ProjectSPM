import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
