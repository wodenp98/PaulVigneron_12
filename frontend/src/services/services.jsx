import axios from "axios";

export const fetchUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchActivity = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/${id}/activity`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAverageSessions = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/${id}/average-sessions`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPerformance = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/user/${id}/performance`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
