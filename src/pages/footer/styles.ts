import { Grid } from "@mui/material";
import styled from "styled-components";

export const FooterGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.unnamed._246970};
`;

export const FooterContainer = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 10%;
    height: 100%;
`;

export const StyledDiv = styled.div`
  position: relative;
  background-color: white;
  width: 750px;
  height: 468px;
  bottom: 80px;
  left: 45%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const StyledContactDiv = styled.div`
  width: 460px;
  height: 368px;
  bottom: 80px;
  text-align: start;
  display: flex;
  flex-direction: column;
  padding: 80px 0 0 150px;
`;

export const StyledTabContact = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;