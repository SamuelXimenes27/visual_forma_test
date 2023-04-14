import { Card, Grid, Typography } from '@mui/material';
import styled from 'styled-components'

export const StyledTabEvent = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
    height: 10%;
  }
`;

export const StyledCardsEvent = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 420px;
`;

export const StyledEventCard = styled(Card)`
    display: flex;
    flex-direction: row;
    min-height: 200;
    width: 390px;
`;

export const StyledDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    min-height: 150px;
    text-align: center;
    overflow: hidden;
`;

export const StyledDate = styled(Typography)`

`;