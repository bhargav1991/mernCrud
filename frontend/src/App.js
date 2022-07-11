import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";
import ViewUser from "./components/ViewUser";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/view-user/:id" element={<ViewUser />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/edit-user/:id" element={<EditUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
