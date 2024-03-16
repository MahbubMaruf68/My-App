import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Notes } from "./Pages/Notes";
import { Questions } from "./Pages/Questions";
import "./App.css";
import HomeInfo from "./Pages/HomeInfo";
import { Classes } from "./Pages/Classes";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "//:title",
      element: (
        <>
          <Navbar />
          <HomeInfo />
        </>
      ),
    },
    {
      path: "/notes",
      element: (
        <>
          <Navbar />
          <Notes />
        </>
      ),
    },
    {
      path: "/questions",
      element: (
        <>
          <Navbar />
          <Questions />
        </>
      ),
    },
    {
      path: "/classes",
      element: (
        <>
          <Navbar />
          <Classes />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
