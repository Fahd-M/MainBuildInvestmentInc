import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BuildingSupplies from "./pages/BuildingSupplies/BuildingSupplies";
import Machinery from "./pages/Machinery/Machinery";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />

            <Route path="supplies">
              <Route index element={<BuildingSupplies />} />
            </Route>

            <Route path="machinery">
              <Route index element={<Machinery />} />
            </Route>

            <Route path="contact">
              <Route index element={<Contact />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />

          </Route>
        </Routes>
    </>
  );
}

export default App;
