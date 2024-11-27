import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Artists from "./pages/Artists";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";

function App() {


  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Artists" element={<Artists/>} />
          <Route path="/Artists/:speciality" element={<Artists/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/my-appointments" element={<MyAppointments/>} />
          <Route path="/appointment/:artistId" element={<Appointment/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
