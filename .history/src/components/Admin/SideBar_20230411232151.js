import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
const SideBar = () => {
  return (
    <>
      <ProSidebar>
        <Menu iconShape='square'>
          <MenuItem
            icon={<FaGem />}
            suffix={<span className='badge red'>New</span>}
          >
            dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> components </MenuItem>
        </Menu>
      </ProSidebar>
    </>
  );
};
export default SideBar;
