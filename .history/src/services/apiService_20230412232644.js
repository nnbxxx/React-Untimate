import axios from "../utils/axiosCustumize";

const postCreateNewUser = (email, username, password, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("username", username);
  data.append("password", password);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("v1/participant", data);
};
const getAllUsers = () => {
  return axios.get("v1/participant/all");
};
const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("v1/participant", data);
};
const deleteUser = (idUser) => {
  return axios.delete("v1/participant", { data: { id: idUser } });
};
const getUsersWithPaginate = (page, limit) => {
  return axios.get(`v1/participant?page=${page}&limit=${limit}`);
};
const postLogin = (email, password) => {
  return axios.post(`v1/login`, { email, password });
};
const postLogi1 = (email, password) => {
  return axios.post(`v1/login`, { email, password });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUsersWithPaginate,
  postLogin,
};
