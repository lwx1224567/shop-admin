import axios from "~/axios";

const getAllManagers = () => {
  return axios.get("/managers");
};

export function login(username, password) {
  return axios.post("/admin/login", { username, password });
}

const updateManager = (id, data) => { 
  return axios.put(`/managers/${id}`, data);
};

const deleteManager = (id) => {
  return axios.delete(`/managers/${id}`);
};

export default {
  getAllManagers,
  createManager,
  updateManager,
  deleteManager,
};
