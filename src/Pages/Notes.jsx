import React, { useState } from "react";
import { YearsData } from "../Data/Data";
import { PageTitle } from "../Components/PageTitle";

export const Notes = () => {
  const [yearData, setYearData] = useState(YearsData);

  return (
    <div>
      <PageTitle title="Notes" />
      <section className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
        {yearData.map((yData) => {
          const { id, title, body } = yData;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{body}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
