
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import InternshipCard from "../components/InternshipCard";

function InternshipList() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/internships")
      .then((response) => {
        setInternships(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load internships.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <h1>Available Internships</h1>
      <p>Explore opportunities and start your career journey.</p>

      {loading && <p>Loading internships...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && internships.length === 0 && (
        <p>No internships available currently.</p>
      )}

      <div className="internship-list">
        {internships.map((internship) => (
          <InternshipCard
            key={internship._id}
            internship={internship}
          />
        ))}
      </div>
    </div>
  );
}

export default InternshipList;
