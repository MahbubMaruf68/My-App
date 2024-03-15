import React, { useState } from "react";

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
      <h1>Here is Home Page</h1>
      <section className="flex flex-wrap justify-around">
        {collegeData.map((cData) => {
          const { id, title, body } = cData;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{truncateString(body, 200)}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
