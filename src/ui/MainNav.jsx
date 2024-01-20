import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";

function MainNav() {
  return (
    <nav>
      <ul>
{/* focus event does not happen because clicking is restricted to svg and text only and not the
    li element  */}
        <li className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 focus:bg-yellow-400">

          <NavLink to="/home">
            <AiOutlineHome />
            <span>خانه</span>
          </NavLink>
        </li>
        <li className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 focus:bg-yellow-400">
          <NavLink to="/people">
            <IoPersonOutline />
            <span>اشخاص</span>
          </NavLink>
        </li>
        <li className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 focus:bg-yellow-400">
          <NavLink to="/estates">
            <HiOutlineBuildingOffice2 />
            <span>املاک</span>
          </NavLink>
        </li>
        <li className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 focus:bg-yellow-400">
          <NavLink to="/contracts">
            <LiaFileContractSolid />
            <span>قراردادها</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
