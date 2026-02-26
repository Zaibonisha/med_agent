import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const registerUser = async (data) => {
  return await axios.post(`${API_URL}register/`, data);
};

export const loginUser = async (data) => {
  return await axios.post(`${API_URL}login/`, data);
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
