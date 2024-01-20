import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";

function MainNav() {
  return (
      <ul>
        <li >

          <NavLink to="/home" activeClassName=" bg-yellow-400 " className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 ">
            <AiOutlineHome />
            <span>خانه</span>
          </NavLink>
        </li>
        <li >
          <NavLink to="/people" className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 ">
            <IoPersonOutline />
            <span>اشخاص</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/estates"  className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 ">
            <HiOutlineBuildingOffice2 />
            <span>املاک</span>
          </NavLink>
        </li>
        <li >
          <NavLink to="/contracts" className="flex rounded-full justify-center text-2xl py-2
         hover:bg-blue-200 hover:transition-all active:opacity-80 ">
            <LiaFileContractSolid />
            <span>قراردادها</span>
          </NavLink>
        </li>
      </ul>
  );
}

export default MainNav;
