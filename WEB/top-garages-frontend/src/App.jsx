import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddGaragePage from "./pages/AddGaragePage";
import GarageDetailsPage from "./pages/GarageDetailsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddGaragePage />} />
        <Route path="/garage/:id" element={<GarageDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
