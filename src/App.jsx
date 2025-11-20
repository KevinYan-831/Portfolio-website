import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/common/SmoothScroll';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import AllProjects from './pages/AllProjects';

const App = () => {
  return (
    <SmoothScroll>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </SmoothScroll>
  );
};

export default App;
