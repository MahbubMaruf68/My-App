import React from "react";
import { useLocation } from "react-router-dom";

export default function HomeInfo() {
  const location = useLocation();

  return (
    <div className="text-center border-4 my-5 p-5">
      <h1 className="mb-5">{location.state.title}</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, 5800)}</p>
    </div>
  );
}
