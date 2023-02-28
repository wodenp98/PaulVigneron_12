import React from "react";
import styled from "styled-components";
import HeaderLogo from "../Components/HeaderLogo";
import NavBarVertical from "../Components/NavBarVertical";
import Presentation from "../Components/Presentation";
import ActivityCharts from "../Components/Graphs/ActivityChart";
import PerformanceCharts from "../Components/Graphs/RadarChart";
import AverageSessions from "../Components/Graphs/AverageSessions";
import MainData from "../Components/Graphs/Score";
import NutritionCards from "../Components/NutritionCards";

import {
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
} from "../data/mock_user-data";

const Main = styled.main`
  display: grid;
  grid-template-columns: 117px 835px 1fr;
  grid-template-rows: 254px 1fr;
  grid-column-gap: 30px;
  height: calc(100% - 91px);
  box-sizing: border-box;
`;

const GraphSide = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 835px;
`;

const GraphGrid = styled.div`
  grid-area: 2 / 2 / 2 / 4;
  width: 65%;
  height: 95%;
  margin-left: 50px;
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
      <Main>
        <NavBarVertical />
        <Presentation firstName="Karl" />
        <GraphGrid>
          <ActivityCharts activity={userActivity.sessions} />

          <GraphSide>
            <AverageSessions average={userAverageSession.sessions} />
            <PerformanceCharts performance={userPerformance} />
            <MainData score={userData} />
          </GraphSide>
        </GraphGrid>
        <NutritionCards nutritionData={userData.keyData} />
      </Main>
    </>
  );
};

export default Profil;
