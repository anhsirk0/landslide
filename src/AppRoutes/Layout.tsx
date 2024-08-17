import { Outlet } from "react-router-dom";
import { OptionsBar } from "@/components";

const Layout = () => {
  return (
    <div
      id="main"
      className="center h-screen w-screen min-h-0 overflow-y-auto scroll-smooth transition-all"
    >
      <Outlet />
      <OptionsBar />
    </div>
  );
};

export default Layout;
