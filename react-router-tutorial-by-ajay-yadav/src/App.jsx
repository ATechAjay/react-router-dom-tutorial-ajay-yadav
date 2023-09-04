import "./App.css";
import Root from "./components/Root";

import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/pages/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
