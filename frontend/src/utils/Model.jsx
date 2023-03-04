/**
 * User firstname
 * @param {array} data Api
 * @returns {object}
 */

export const getFirstname = (data) => {
  const firstname = data.data.userInfos.firstName;
  return firstname;
};

/**
 * User activity
 * @param {array} data Api
 * @returns {array}
 */

export function getActivitySessions(data) {
  const arrayActivity = [];
  const activity = data.data.sessions;

  activity.forEach((item) => {
    let objectActivity = {
      day: new Date(item.day).getDate(),
      kilogram: item.kilogram,
      calories: item.calories,
    };

    arrayActivity.push(objectActivity);
  });
  return arrayActivity;
}

/**
 * User average session
 * @param {array} data Api
 * @returns {array}
 */

export function getAverageSessions(data) {
  const arrayAverageSessions = [];
  const sessions = data.data?.sessions;
  const day = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  sessions.forEach((item) => {
    let objectAverageSessions = {
      day: day[item.day],
      sessionLength: item.sessionLength,
    };
    arrayAverageSessions.push(objectAverageSessions);
  });

  return arrayAverageSessions;
}

/**
 * User performance
 * @param {array} data Api
 * @returns {array}
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
    let dataValue = { value: item.value, kind: frenchWords[item.kind] };
    return array.push(dataValue);
  });

  const performance = {
    userId: data.data.userId,
    kind: data.data.kind,
    data: array,
  };

  return performance.data;
}

/**
 * User score
 * @param {array} data Api
 * @returns {number}
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
 * User nutrition
 * @param {array} data api
 * @returns {object}
 */

export function getNutrition(data) {
  const dataApi = data.data;
  const keyData = dataApi.keyData;

  return keyData;
}
