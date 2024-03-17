import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { collegesData } from "../Data/Data";
import { PageTitle } from "../Components/PageTitle";

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
      <PageTitle title="Home Page" />

      <h1 className="text-center my-10 text-4xl font-serif">
        Know Something About Our Colleges
      </h1>
      <section className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
        {collegeData.map((cData) => {
          const { id, title, body } = cData;
          return (
            <article key={id}>
              <h1 className="bg-[rgb(30,40,65)] rounded mb-5 text-blue-300">
                {title}
              </h1>
              <p>{truncateString(body, 200)}</p>
              <Link
                to={title}
                state={{ id, title, body }}
                className="text-green-500"
              >
                Learn More
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};
