export const getFirstname = (data) => {
  const firstname = data.data.userInfos.firstName;
  return firstname;
};

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

export function getPerformance(data) {
  const kind_fr = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const obj_fr = {
    userId: data.data.userId,
    kind: {},
    data: data.data.data,
  };

  for (const item of obj_fr.data) {
    item.kind = kind_fr[item.kind];
  }

  return obj_fr;
}
export function getScore(data) {
  const dataApi = data.data;
  if (dataApi.todayScore) {
    return dataApi.todayScore * 100;
  } else {
    return dataApi.score * 100;
  }
}

export function getNutrition(data) {
  const dataApi = data.data;
  const keyData = dataApi.keyData;

  return keyData;
}
