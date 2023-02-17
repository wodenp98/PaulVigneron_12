import React from "react";
import styled from "styled-components";
import HeaderLogo from "../Components/HeaderLogo";
import NavBarVertical from "../Components/NavBarVertical";
import Presentation from "../Components/Presentation";
import ActivityCharts from "../Components/Graphs/ActivityChart";
import PerformanceCharts from "../Components/Graphs/RadarChart";
import AverageSessions from "../Components/Graphs/AverageSessions";
import MainData from "../Components/Graphs/Score";

import {
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
} from "../data/mock_user-data";

const ContainerUser = styled.div`
  margin-left: 100px;
  height: 88%;
  box-sizing: border-box;
  padding: 61px 90px 40px 108px;
`;

const Profil = () => {
  const userId = 12;
  const userActivity = USER_ACTIVITY.find((user) => user.userId === userId);
  const userPerformance = USER_PERFORMANCE.find(
    (user) => user.userId === userId
  );

  const userAverageSession = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === userId
  );

  const userData = USER_MAIN_DATA.find((user) => user.id === userId);

  return (
    <>
      <HeaderLogo />
      <NavBarVertical />
      <ContainerUser>
        <Presentation firstName="Karl" />

        {/* faire une div qui contient tout les graphiques? */}
        <ActivityCharts activity={userActivity.sessions} />
        <PerformanceCharts performance={userPerformance} />
        <AverageSessions average={userAverageSession.sessions} />
        <MainData score={userData} />
      </ContainerUser>
    </>
  );
};

export default Profil;
