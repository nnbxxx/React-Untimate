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
import "./SideBar.scss";
import sidebarBg from "../../assets/bg2.jpg";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { SiWebflow } from "react-icons/si";
import { Link } from "react-router-dom";
const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint='md'
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={"3rem"} color={"00bfff"} />
            <span>Webdevstudios</span>
            <Link to='/' />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape='circle'>
            <MenuItem icon={<MdDashboard />}>
              Dashboard
              <Link to='/admins' />
            </MenuItem>
          </Menu>
          <Menu iconShape='circle'>
            <SubMenu icon={<FaGem />} title={"Features"}>
              <MenuItem>
                {" "}
                Quản lý User
                <Link to='/admins/manage-users' />
              </MenuItem>
              <MenuItem>
                {" "}
                Quản lý bài Quiz
                <Link to='/admins/manage-quizes' />
              </MenuItem>
              <MenuItem> Quản lý câu Hỏi</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className='sidebar-btn-wrapper'
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href='https://webdevstudios.org/'
              target='_blank'
              className='sidebar-btn'
              rel='noopener noreferrer'
            >
              <SiWebflow />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                Webdevstudios
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default SideBar;
