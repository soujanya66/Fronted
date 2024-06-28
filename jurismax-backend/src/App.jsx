import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Work from "./Components/Header/Work";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import Report from "./Pages/Report/Report";
import Protected from "./Pages/Protected/Protected";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route element={<Protected />}>
          <Route exact path="/report" element={<Report />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
