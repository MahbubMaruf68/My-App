import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Notes } from "./Pages/Notes";
import { Questions } from "./Pages/Questions";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
