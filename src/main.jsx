import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import "./index.css"
///page imports
import App from "./App"
import About from "./assets/pages/about/about"
import Settings from "./assets/pages/setting/settings"
import Project from "./assets/pages/project/projects"
/// router definition
const router = createBrowserRouter([
  {
    path: "/linnn",
    element: <App />,
    basename: "/linnn",
  },
  {
    path: "/linnn/about",
    element: <About />,
    basename: "/linnn/about",
  },
  {
    path: "/linnn/settings",
    element: <Settings />,
    basename: "/linnn/settings",
  },
  {
    path: "/linnn/project",
    element: <Project />,
    basename: "/linnn/project",
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
