import React, { useEffect, useState } from "react";
import Job from "../Components/jobs";

import "./jobs.css";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    "limit": 10,
    "offset": 0
   });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
   };
  useEffect(() => {
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.json())
    .then((response) => setData(response.jdList))
    .catch((error) => console.error(error));
    
  }, []);
   console.log("data",data)
  function searchHandler(e) {
    e.preventDefault();
    if (search.trim().length === 0) {
      return;
    }
    fetch(`https://api.weekday.technology/adhoc/getSampleJdJSON/get/${search}`)
      .then((v) => v.json())
      .then((v) => setData(v));
  }
  return (
    <>
      <p className="heading" style={{ marginBottom: "0px", fontSize: "45px" }}>
        Your Gateway to <code style={{ color: "green" }}>Opportunities</code>:
        Explore JOB PORTAL.
      </p>

      <div>
        <form
          className="search"
     
          style={{ flexDirection: "row", marginTop: "25px" }}
        >
          <input
            type="search"
            name="q"
            id="search"
            value={search}
            placeholder="Enter text to search"
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="job-list">
        {data.length ===0 ? <p className="heading" style={{ fontSize: "35px" }}>Search not found!</p>
        :
        data.map((job) => (
          
          <Job key={job.id} job={job} />
        )

        )}
      </div>
    </>
  );
};

export default Jobs;