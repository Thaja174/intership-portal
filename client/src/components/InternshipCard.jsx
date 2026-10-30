
import { Link } from "react-router-dom";

function InternshipCard({ internship }) {
  return (
    <div className="internship-card">
      <h2>{internship.title}</h2>

      <h3>{internship.company}</h3>

      <p>Location: {internship.location}</p>
      <p>Duration: {internship.duration}</p>
      <p>Stipend: {internship.stipend}</p>
      <p>Type: {internship.type}</p>

      <Link to={`/internship/${internship._id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default InternshipCard;
