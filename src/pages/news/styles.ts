import { Card, CardMedia, Grid } from '@mui/material';
import styled from 'styled-components'

export const StyledTabNews = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StyledCardsNews = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 420px;
`;

export const StyledCard = styled(Card)`
    width: 345px;
    max-width: 345px;
    margin: auto;
`;

export const StyledCardMedia = styled(CardMedia)`
    height: 180px;
`;

export const Container = styled(Grid)`
    @media (max-width: 768px) {
    height: 50%;
  }
`;
