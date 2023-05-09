import { Route, Routes } from "react-router-dom";
import Contacts from "./Pages/Contacts";
import Dashboard from "./Pages/Charts_and_Maps";
import EditContact from "./Components/Edit_Contact";
import ContactForm from "./Components/ContactForm";
import { useLocation } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <h1 className="fixed top-0 z-50 w-full bg-indigo-600 p-4 text-2xl font-bold text-yellow-300 shadow-sm shadow-slate-700">
        {currentRoute == "/" ? " Contact Management App" : "Charts and Maps"}
      </h1>
      <div className="flex w-full ">
        <div className="sticky  top-0 h-screen">
          <SideBar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/contact_form" element={<ContactForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit/:id" element={<EditContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
