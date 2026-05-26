import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import ArchitecturePage from './pages/ArchitecturePage';
import HeritageStatusPage from './pages/HeritageStatusPage';
import EntrepreneurialPage from './pages/EntrepreneurialPage';
import ToursPage from './pages/ToursPage';
import EducationPage from './pages/EducationPage';
import GalleryPage from './pages/GalleryPage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/heritage-status" element={<HeritageStatusPage />} />
        <Route path="/entrepreneurial-vancouver" element={<EntrepreneurialPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
