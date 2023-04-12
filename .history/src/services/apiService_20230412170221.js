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
  //
};
const putUpdateUser = (username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("username", username);
  data.append("password", password);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("v1/participant", data);
};
export { postCreateNewUser, getAllUsers, putUpdateUser };
