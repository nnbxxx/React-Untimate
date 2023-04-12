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
          <MenuItem icon={<FaGem />}>dashboard</MenuItem>
          <SubMenu title='Components' icon={<FaHeart />}>
            <MenuItem>Component 1 </MenuItem>
            <MenuItem>Component 2 </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  );
};
export default SideBar;
