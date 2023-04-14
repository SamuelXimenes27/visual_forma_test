import { Grid, Typography, Divider, useMediaQuery, } from '@mui/material'
import { StyledCardsLinks, StyledTabLinks } from './styles'

const logo = require("../../assets/logo/iconLink.png");

const LinksPage = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const linksCard = [
        {
            icon: logo
        },
        {
            icon: logo
        },
        {
            icon: logo
        },
        {
            icon: logo
        },
        {
            icon: logo
        },
    ];

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <Grid container ml={isDesktop ? 25 : '25%'}>
                <StyledTabLinks item xs={8}>
                    <Grid>
                        <Typography sx={{
                            fontSize: 26,
                            textTransform: 'uppercase',
                        }}>Links Úteis</Typography>
                        <Divider sx={{ width: '50%', backgroundColor: '#64AE87' }} />
                    </Grid>
                </StyledTabLinks>
                <StyledCardsLinks item xs={12} mt={15} >
                    <Grid container spacing={2} flexWrap={isDesktop ? 'initial' : "nowrap"} sx={{ overflowX: 'auto', }}>
                        {linksCard.map((event) => (
                            <Grid item sx={{ width: '175px', height: '60px' }} mr={10} >
                                <img src={event.icon} height={40}></img>
                            </Grid>
                        ))}
                    </Grid>
                </StyledCardsLinks>
            </Grid>
        </Grid>
    )
}

export default LinksPage