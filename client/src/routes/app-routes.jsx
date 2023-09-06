import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Glaucoma from '../pages/Glaucoma';
import Cataract from '../pages/Cataract';
import GetStarted from '../pages/GetStarted';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/glaucoma" element={<Glaucoma />} />
          <Route path="/getstarted/cataract" element={<Cataract />} />
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/getstarted" element={<GetStarted />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
