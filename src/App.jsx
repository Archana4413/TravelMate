import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;