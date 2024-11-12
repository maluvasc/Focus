import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./screens/home/App.js";
import Team from "./screens/team/team.js";
import Projects from "./screens/projects/projects.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/equipe",
    element: <Team />,
  },
  {
    path: "/projetos",
    element: <Projects />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
