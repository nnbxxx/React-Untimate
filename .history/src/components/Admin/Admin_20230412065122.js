import SideBar from "./SideBar";
import "./Admin.scss";

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
import sidebarBg from "./assets/bg2.jpg";

const Admin = (props) => {
  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <SideBar />
      </div>
      <div className='admin-content'>dhdhfhefihfsduhfhde</div>
    </div>
  );
};
export default Admin;
