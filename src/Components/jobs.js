import React from "react";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="job-card">
        <h2>{job.companyName}</h2>
        <p>{job.desc}</p>
        <p>Experience: {job.maxExp} years</p>
        <div className="techs">
        
        </div>
        <button onClick={() => navigate("/")} className="details-button">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Job;