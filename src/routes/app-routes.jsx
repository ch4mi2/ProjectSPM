import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Glaucoma from '../pages/Glaucoma';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/glaucoma" element={<Glaucoma />} />
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
