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
    </>
  );
};
