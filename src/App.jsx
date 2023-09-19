import { RouterProvider } from "react-router-dom";
import { route } from "./route/route";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={route} />
    </>
  );
}

export default App;
