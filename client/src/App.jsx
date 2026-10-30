
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InternshipList from "./pages/InternshipList";
import InternshipDetails from "./pages/InternshipDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InternshipList />} />

        <Route
          path="/internship/:id"
          element={<InternshipDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
