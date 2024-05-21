import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;


  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  transition: background-color 0.8s linear, color 0.5s linear;
`;

export const MainSection = styled.div`
 text-align: center;
`;