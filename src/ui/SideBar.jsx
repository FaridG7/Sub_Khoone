import Logo from "./Logo"
import MainNav from "./MainNav"

function SideBar() {
    return (
        <aside className="h-full w-1/4 bg-[#e3d3e0]">
            <Logo type="sideBar" />
            <MainNav/>
        </aside>
    )
}

export default SideBar
