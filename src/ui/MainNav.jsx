import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";

function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">
            <AiOutlineHome />
            <span>خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people">
            <IoPersonOutline />
            <span>اشخاص</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/estates">
            <HiOutlineBuildingOffice2 />
            <span>املاک</span>
          </NavLink>
        </li>
        <li>
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
