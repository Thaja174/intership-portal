
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

function InternshipDetails() {
  const { id } = useParams();

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/api/internships/${id}`)
      .then((response) => {
        setInternship(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load internship details.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading internship details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!internship) {
    return <p>Internship not found.</p>;
  }

  return (
    <div>
      <Navbar />

      <div className="internship-details">
        <h1>{internship.title}</h1>
        <h2>{internship.company}</h2>

        <p><strong>Location:</strong> {internship.location}</p>
        <p><strong>Duration:</strong> {internship.duration}</p>
        <p><strong>Stipend:</strong> {internship.stipend}</p>
        <p><strong>Type:</strong> {internship.type}</p>

        <h3>Description</h3>
        <p>{internship.description}</p>

        <h3>Required Skills</h3>
        <ul>
          {internship.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3>Requirements</h3>
        <ul>
          {internship.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>

        <Link to="/">
          <button>Back to Internships</button>
        </Link>
      </div>
    </div>
  );
}

export default InternshipDetails;
