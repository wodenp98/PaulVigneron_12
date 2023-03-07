import React, { useState, useEffect } from "react";
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
  fetchActivity,
  fetchUser,
  fetchAverageSessions,
  fetchPerformance,
} from "../services/Services";
import {
  getActivitySessions,
  getFirstname,
  getAverageSessions,
  getPerformance,
  getScore,
  getNutrition,
} from "../utils/Model";

/**
 * Css for profil page components with styled components
 */

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
  /**
   * Get id of a user
   */
  let { id } = useParams();

  /**
   * Initiate the state for datas
   */
  const [users, setUsers] = useState("");
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [score, setScore] = useState(0);
  const [nutritionData, setNutritionData] = useState({});

  /**
   * Get data user from API and update the user state
   */
  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUser(id);
      setUsers(getFirstname(usersData));

      const usersActivity = await fetchActivity(id);
      setActivity(getActivitySessions(usersActivity));

      const usersAverageSessions = await fetchAverageSessions(id);
      setAverageSessions(getAverageSessions(usersAverageSessions));

      const usersPerformance = await fetchPerformance(id);
      setPerformance(getPerformance(usersPerformance));

      const usersScore = await fetchUser(id);
      setScore(getScore(usersScore));

      const usersNutritionData = await fetchUser(id);
      setNutritionData(getNutrition(usersNutritionData));
    };
    fetchData();
  }, [id]);

  return (
    <>
      <HeaderLogo />
      <Main>
        <NavBarVertical />
        <Presentation firstName={users} />
        <GraphGrid>
          <ActivityCharts activity={activity} />

          <GraphSide>
            <AverageSessions average={averageSessions} />
            {performance.length > 0 && (
              <PerformanceCharts performance={performance} />
            )}
            <MainData score={score} />
          </GraphSide>
        </GraphGrid>
        <NutritionCards nutritionData={nutritionData} />
      </Main>
    </>
  );
};

export default Profil;
