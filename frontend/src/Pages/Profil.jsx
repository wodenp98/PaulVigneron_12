import React from "react";
import { useParams } from "react-router-dom";
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

import { useFetchActivity, useFetchFirstname } from "../services/Services";
import { getActivitySessions, getFirstname } from "../utils/Model";

const Main = styled.main`
  display: grid;
  grid-template-columns: 10% 63% 20%;
  grid-template-rows: 30% 1fr;
  grid-column-gap: 30px;
  height: calc(100% - 91px);
  box-sizing: border-box;
  @media screen and (max-width: 1220px) {
    grid-template-columns: 10% 60% 20%;
  }
`;

const GraphSide = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  height: 42%;
  @media screen and (max-width: 1220px) {
    height: 30%;
  }
`;

const GraphGrid = styled.div`
  grid-area: 2 / 2 / 2 / 4;
  grid-column: 2;
  margin-left: 50px;
`;

const Profil = () => {
  const userId = 12;
  let { id } = useParams();

  const [dataFirstname] = useFetchFirstname(id);
  const firstname = getFirstname(dataFirstname);

  const [dataActivity] = useFetchActivity(id);
  const activity = getActivitySessions(dataActivity);

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
        <Presentation firstName={firstname} />
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
