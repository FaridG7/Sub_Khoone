import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div>
      <header></header>
      <SideBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default AppLayout;
