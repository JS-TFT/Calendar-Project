import axios from "axios";
import { API_ENDPOINT } from "../Constants/AppVariables";

export const getEvents = async () => {
  const response = await axios.get(`${API_ENDPOINT}`);
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`${API_ENDPOINT}/${id}`);
  return response.data;
};
