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
  useFetchActivity,
  useFetchFirstname,
  useFetchAverageSessions,
  useFetchPerformance,
} from "../services/Services";
import {
  getActivitySessions,
  getFirstname,
  getAverageSessions,
  getPerformance,
  getScore,
  getNutrition,
} from "../utils/Model";

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
  let { id } = useParams();

  const [dataFirstname] = useFetchFirstname(id);
  const firstname = getFirstname(dataFirstname);

  const [dataActivity] = useFetchActivity(id);
  const activity = getActivitySessions(dataActivity);

  const [dataAverageSessions] = useFetchAverageSessions(id);
  const averageSessions = getAverageSessions(dataAverageSessions);

  const [dataPerformance] = useFetchPerformance(id);
  const performance = getPerformance(dataPerformance);

  const score = getScore(dataFirstname);

  const nutritionData = getNutrition(dataFirstname);

  return (
    <>
      <HeaderLogo />
      <Main>
        <NavBarVertical />
        <Presentation firstName={firstname} />
        <GraphGrid>
          <ActivityCharts activity={activity} />

          <GraphSide>
            <AverageSessions average={averageSessions} />
            <PerformanceCharts performance={performance} />
            <MainData score={score} />
          </GraphSide>
        </GraphGrid>
        <NutritionCards nutritionData={nutritionData} />
      </Main>
    </>
  );
};

export default Profil;
