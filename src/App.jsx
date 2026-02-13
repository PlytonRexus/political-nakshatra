// Main App Component with Routing

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './contexts/QuizContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { About } from './pages/About';

function App() {
  return (
    <Router basename="/political-nakshatra">
      <QuizProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </QuizProvider>
    </Router>
  );
}

export default App;
