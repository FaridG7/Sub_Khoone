import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className=" h-screen bg-[#045225]">
      <header className=" bg-[#e3d3e0] h-[5%]" />
      <div className="h-[90%] w-full flex">
        <SideBar />
        <main className=" bg-[#045225] ">
          <Outlet />
        </main>
      </div>
      <footer className="w-auto bg-[#e3d3e0] h-[5%]" />
    </div>
  );
}
export default AppLayout;
