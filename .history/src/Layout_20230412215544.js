import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import { ToastContainer } from "react-toastify";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Auth/Login";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='users' element={<User />} />
        </Route>
        <Route path='/admins' element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path='manage-users' element={<ManageUser />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};
export default Layout;
