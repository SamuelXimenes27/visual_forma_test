import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import { Container, StyledCardsNews, StyledTabNews } from './styles'
import NewsCard from './components/NewsCard';

const NewsPage = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const eventsData = [
        {
            date: '27 - 07 - 2020',
            title: 'Autarquia360 ao fresco 2020',
        },
        {
            date: '27 - 07 - 2020',
            title: 'Exposição de fotografia Still(h)e(a)en',
        },
        {
            date: '27 - 07 - 2020',
            title: 'Regularizada a situação da interrupção do fornecimento',
        }
    ];

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
            <Container container ml={isDesktop ? 25 : '25%'}>
                <StyledTabNews item xs={6}>
                    <Grid>
                        <Typography sx={{
                            fontSize: 26,
                            textTransform: 'uppercase',
                        }}>Notícias</Typography>
                        <Divider sx={{ width: '60%', backgroundColor: '#64AE87' }} />
                    </Grid>
                    {isDesktop ? <Typography sx={{
                        fontSize: 20,
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                    }}>Ver todas</Typography> : null}
                </StyledTabNews>
                <StyledCardsNews mt={5} ml={2}>
                    <Grid container spacing={2} flexWrap="nowrap" sx={{ overflowX: 'auto', width: isDesktop ? null : '800px', scrollbarWidth: 'none' }}>
                        {eventsData.map((event) => (
                            <Grid item xs={8} sm={4} ml={2}>
                                <NewsCard
                                    date={event.date}
                                    newsTitle={event.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </StyledCardsNews>
                {isDesktop ? null : <Grid ml={'25%'}>
                    <Typography sx={{
                        fontSize: 20,
                        textTransform: 'uppercase',
                        color: '#64AE87',
                        borderBottom: '1px solid #64AE87',
                        cursor: 'pointer'
                    }}>Ver todas</Typography>
                </Grid>}
            </Container>
        </Grid>
    )
}

export default NewsPage