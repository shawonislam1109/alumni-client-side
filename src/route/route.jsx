import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/main/Main";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{}],
  },
]);
