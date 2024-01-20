import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";

const baseClass =
  "flex rounded-full justify-center text-2xl py-2 hover:bg-blue-200 hover:transition-all active:opacity-80";

function MainNav() {
  return (
    <ul>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? `bg-yellow-400 ${baseClass}` : `${baseClass}`
          }
        >
          <AiOutlineHome />
          <span>خانه</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive ? `bg-yellow-400 ${baseClass}` : `${baseClass}`
          }
        >
          <IoPersonOutline />
          <span>اشخاص</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/estates"
          className={({ isActive }) =>
            isActive ? `bg-yellow-400 ${baseClass}` : `${baseClass}`
          }
        >
          <HiOutlineBuildingOffice2 />
          <span>املاک</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contracts"
          className={({ isActive }) =>
            isActive ? `bg-yellow-400 ${baseClass}` : `${baseClass}`
          }
        >
          <LiaFileContractSolid />
          <span>قراردادها</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
