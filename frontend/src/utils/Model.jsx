/**
 * Function to return the firstname
 * @param {array} data Api
 * @returns {object} firstname
 */

export const getFirstname = (data) => {
  const firstname = data.data.userInfos.firstName;
  return firstname;
};

/**
 * Function to get activity data for a user
 * @param {array} data Api
 * @returns {array} data activity
 */

export function getActivitySessions(data) {
  const arrayActivity = [];
  const activity = data.data.sessions;

  activity.forEach((item) => {
    let objectActivity = {
      ...item,
      day: new Date(item.day).getDate(),
    };

    arrayActivity.push(objectActivity);
  });
  return arrayActivity;
}

/**
 * Function to get the average session from a user
 * @param {array} data Api
 * @returns {array} average session data with the good format
 */

export function getAverageSessions(data) {
  const arrayAverageSessions = [];
  const sessions = data.data?.sessions;
  const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  sessions.forEach((item) => {
    let objectAverageSessions = {
      ...item,
      day: day[item.day],
    };
    arrayAverageSessions.push(objectAverageSessions);
  });

  return arrayAverageSessions;
}

/**
 * Function to get the performance from the user
 * @param {array} data Api
 * @returns {array} performance data
 */

export function getPerformance(data) {
  const frenchWords = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  let array = [];
  data.data.data.forEach((item) => {
    let dataValue = { ...item, kind: frenchWords[item.kind] };
    return array.push(dataValue);
  });

  const performance = {
    ...data.data,
    data: array,
  };
  return performance.data;
}

/**
 * Function to get the score from a user
 * @param {array} data Api
 * @returns {number} score data
 */

export function getScore(data) {
  const dataApi = data.data;
  if (dataApi.todayScore) {
    return dataApi.todayScore * 100;
  } else {
    return dataApi.score * 100;
  }
}

/**
 * Function to get nutrition data from a user to use in nutrition cards
 * @param {array} data api
 * @returns {object} nutrition data
 */

export function getNutrition(data) {
  const keyData = data.data.keyData;

  let newData = {
    ...keyData,
    calorieCount: keyData.calorieCount.toLocaleString("en-US"),
  };

  return newData;
}
