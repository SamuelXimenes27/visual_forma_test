import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import { StyledCardsDocuments, StyledContainer, StyledTabDocuments } from './styles'
import DocumentCard from './components/DocumentCard';

const logo1 = require("../../assets/logo/icon1-1.png");
const logo2 = require("../../assets/logo/icon2-1.png");
const logo3 = require("../../assets/logo/icon3-1.png");
const logo4 = require("../../assets/logo/icon4-1.png");
const logo5 = require("../../assets/logo/icon5-1.png");

const DocumentsPage = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const colors = ["#246970", "#69A391", "#21878F", "#64AE87", "#FDAC1D"];

    const cardsData = [
        {
            icon: logo1,
            title: 'Atas',
        },
        {
            icon: logo2,
            title: 'Editais',
        },
        {
            icon: logo3,
            title: 'Formulários',
        },
        {
            icon: logo4,
            title: 'Documentos',
        },
        {
            icon: logo5,
            title: 'Inscrições',
        },
    ]

    return (
        <StyledContainer container>
            <Grid container ml={isDesktop ? 25 : '25%'}>
                <StyledTabDocuments item xs={8}>
                    <Grid>
                        <Typography sx={{
                            fontSize: 26,
                            textTransform: 'uppercase',
                        }}>Documento Institucionais</Typography>
                        <Divider sx={{ width: '20%', backgroundColor: '#64AE87' }} />
                    </Grid>
                </StyledTabDocuments>
                <StyledCardsDocuments item xs={10} mt={5}>
                    <Grid container spacing={2}>
                        {cardsData.map((event, index) => (
                            <Grid item>
                                <DocumentCard
                                    icon={event.icon}
                                    title={event.title}
                                    colors={{ backgroundColor: colors[index % colors.length] }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </StyledCardsDocuments>
            </Grid>
        </StyledContainer>
    )
}

export default DocumentsPage