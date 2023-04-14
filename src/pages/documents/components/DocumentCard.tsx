import { Grid, Typography, useMediaQuery } from '@mui/material';
import { StyledCard } from '../styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface EventCardProps {
    icon: any;
    title: string;
    colors: any;
}

const DocumentCard: React.FC<EventCardProps> = ({ icon, title, colors }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <StyledCard style={colors}>
            {isDesktop ? <Grid padding={5}>
                <img src={icon}></img>
            </Grid> : null}
            <Grid container sx={{ display: 'flex', justifyContent: isDesktop ? 'space-between' : 'center', width: '85%' }}>
                <Typography variant="subtitle1" color='white' textTransform='uppercase' fontSize={isDesktop ? '' : 20}>
                    {title}
                </Typography>
                {isDesktop ? <ArrowForwardIcon sx={{ color: 'white', fontSize: 18, cursor: 'pointer' }} /> : null}
            </Grid>

        </StyledCard>
    );
}

export default DocumentCard