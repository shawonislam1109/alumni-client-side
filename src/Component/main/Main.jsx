import { Outlet } from "react-router-dom";
import NavSection from "../navbar/ResNav";

const Main = () => {
  return (
    <div>
      <NavSection />
      <Outlet />
    </div>
  );
};

export default Main;
