import axios from "axios";

/**
 * Fetch Sportsee api for user data (display firstname, score and nutrition data)
 * @param {string} id id from the user
 * @returns {object} user main data
 */

export const fetchUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetch Sportsee api for user data (display activity chart)
 * @param {string} id id from the user
 * @returns {object} user activity data
 */

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

/**
 * Fetch Sportsee api for user data (display averageSessions chart)
 * @param {string} id id from the user
 * @returns {object} user average sessions data
 */

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

/**
 * Fetch Sportsee api for user data (display performance chart)
 * @param {string} id id from the user
 * @returns {object} user performance data
 */

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
