import { FooterContainer, FooterGrid } from './styles'
import { Typography, Divider, Grid, useMediaQuery } from '@mui/material'

const logos = require("../../assets/logo/logos3.png");

const Footer = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <FooterGrid>
            <FooterContainer>
                <div>
                    <Grid container spacing={2} height={'200px'} sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 0 0 20%', textAlign: 'center', alignContent: 'center', alignItems: 'center', }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" component="h3" textTransform={'uppercase'} color={'white'} textAlign={'start'} mb={1.5} >
                                Município
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Mensagem do Presidente
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Câmara Municipal
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Assembleia Municipal
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Freguesias
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} mb={3}>
                            <Typography variant="h6" component="h3" textTransform={'uppercase'} color={'white'} textAlign={'start'} mb={1.5} >
                                Autarquia360
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Onde Estamos
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Conheça-nos melhor
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Visite-nos
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" component="h3" textTransform={'uppercase'} color={'white'} textAlign={'start'} mb={1.5} >
                                Atividade Municipal
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Ação Social
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                CPCJ
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Educação
                            </Typography>
                            <Typography variant="body1" color={'white'} textAlign={'start'} >
                                Ambiente
                            </Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Typography variant="h6" component="h3" textTransform={'uppercase'} color={'white'} textAlign={'start'} mb={1.5} >
                                Subscreva a nossa newsletter
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ backgroundColor: 'white', width: '75%', marginLeft: '20%' }} />
                    <Grid container spacing={2} height={'200px'} ml={"10%"} sx={{ display: 'flex', padding: '0 0 0 20%', textAlign: 'center', alignContent: 'center', alignItems: 'center', }}>
                        {isDesktop ?
                            <>
                                <Grid item xs={12} sm={6} md={3} mb={3}>
                                    <Typography variant="body1" component="div" color={'white'} >
                                        @2020 Autarquia360 | Todos os direitos reservados
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} mb={3}>
                                    <Typography variant="body1" component="div" color={'white'} >
                                        Mapa do site | Política de Privacidade | Ficha Técnica
                                    </Typography>
                                </Grid>
                            </>
                            :
                            <Grid container mr={"10%"} sx={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
                                <Typography>@2020 Autarquia360</Typography>
                                <Typography>Todos os direitos reservados</Typography>
                                <Typography>Mapa do site</Typography>
                                <Typography>Política de Privacidade</Typography>
                                <Typography>Ficha Técnica</Typography>
                            </Grid>
                        }
                        <Grid item xs={12} sm={6} md={3} mb={3}>
                            <img src={logos} style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </div>
            </FooterContainer>
        </FooterGrid>
    )
}

export default Footer

