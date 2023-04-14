import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiFacebook, TfiSearch } from "react-icons/tfi";
import { Container, StyledAppBar, StyledToolBar } from "./styles";

export const SearchNavBar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) {
    return null;
  }

  return (
    <Container>
      <StyledAppBar>
        <StyledToolBar>
          <Grid item xs={2} sm={3} />
          <Grid item xs={0.2} flexGrow={1} mb={1} ml={10}>
            <AiOutlineInstagram size={isDesktop ? 18 : 24} style={{ height: "24px", cursor: 'pointer' }} />
            <TfiFacebook size={isDesktop ? 16 : 20} style={{ height: "24px", marginLeft: 10, cursor: 'pointer' }} />
          </Grid>
          <Grid item xs={6} sm={4} />
          <Grid item xs={1} sm={1} flexGrow={0.2} mb={1}>
            <TfiSearch size={isDesktop ? 18 : 24} style={{ cursor: 'pointer' }} />
          </Grid>
        </StyledToolBar>
      </StyledAppBar>
    </Container>
  );
};
