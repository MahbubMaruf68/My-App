import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collegesData } from "../Data";

export const Home = () => {
  const [collegeData, setCollegeData] = useState(collegesData);

  // For Slice Body Data

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <section className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
        {collegeData.map((cData) => {
          const { id, title, body } = cData;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncateString(body, 200)}</p>
              <Link to={title}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};
