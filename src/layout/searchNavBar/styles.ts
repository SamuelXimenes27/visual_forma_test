import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";
import { transformPx } from "../../helpers/transformPx";

export const Container = styled.div`
  width: 100%;
  height: 70px;
`;

export const StyledAppBar = styled.div`
  height: 46px;
  justify-content: center;
  padding: 0px ${transformPx(86)};
  color: #ffffff;

  && {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.unnamed._246970};
    outline: 4px solid ${({ theme }) => theme.colors.unnamed._246970};
    background-repeat: repeat-x;
    background-position: bottom;
  }
`;

export const StyledToolBar = styled(Toolbar)`
  && {
    margin: 0px;
    padding: 0px;
  }
`;
