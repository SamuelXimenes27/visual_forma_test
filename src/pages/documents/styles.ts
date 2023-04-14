import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledTabDocuments = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledCardsDocuments = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 420px;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 216px;
    height: 279px;
    text-align: center;
    overflow: hidden;
    margin-right: 20px;

    @media (max-width: 768px) {
    height: 90%;
    width: 400px;
  }
`;

export const StyledContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 768px) {
    height: 200px;
  }

    @media (max-width: 1507px) {
    margin-bottom: 20%;
  }

  @media (max-width: 1103px) {
    margin-bottom: 70%;
  }
`;