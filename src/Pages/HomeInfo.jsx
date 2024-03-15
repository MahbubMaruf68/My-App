import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collegesData } from "../Data";

export default function HomeInfo() {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const clgData = collegesData.filter((clgsData) => clgsData.title === title);
    setBodyData(clgData[0].body);
  }, []);

  return (
    <div className="text-center border-4 my-5 p-5">
      <h1 className="mb-5">{title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(501, 5800)}</p>
    </div>
  );
}
