import styled from "styled-components";
import React from "react";

export const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  background: rgb(255, 255, 255);
  flex-grow: 0.6;
  order: 1;
  border-right: 1.5px solid rgb(228, 229, 233);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: 768px) {
    visibility: hidden;
    display: none;
  }
`;

export const InnerContainer = styled.div`
  background: #f6f8fc;
  flex-grow: 7;
  order: 2;
`;

export const DashboardList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
`;
export const DashboardListItem = styled.li`
  width: auto;
  height: 3vh;
  /* background: red; */
  list-style: none;
  text-decoration: none;
  color: rgb(130, 130, 130);
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 10px;
  margin-top: 10%;
  letter-spacing: 0.07rem;
  border-right: 4px solid #fff;
  display: flex;
  flex-direction: row;
  transition: 0.4s all ease-in-out;
  -webkit-transition: 0.4s all ease-in-out;
  -mozkit-transition: 0.4s all ease-in-out;
  &:hover {
    color: #3d4fec;
    border-right: 4px solid #3d4fec;
    transition: 0.4s all ease-in-out;
    -webkit-transition: 0.4s all ease-in-out;
    -mozkit-transition: 0.4s all ease-in-out;
  }
`;

export const LogoContainer = styled.div`
  height: 15vh;
  width: 100%;
  background: #3d4fec;
`;

export const DashboardListIcon = styled.div`
  flex-grow: 1;
  min-width: 20%;
  max-width: 20%;
`;

export const DashboardListContent = styled.div`
  flex-grow: 4;
  text-align: left;
`;

export const DashboardBottom = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30%;
`;
