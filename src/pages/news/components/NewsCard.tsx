import { Grid, CardContent, Typography, CardActions, Button } from '@mui/material'
import { StyledCard, StyledCardMedia } from '../styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const image = require("../../../assets/img/image7.png");

interface NewsCardProps {
    date: string;
    newsTitle: string;
}


const NewsCard: React.FC<NewsCardProps> = ({ date, newsTitle }) => {
    return (
        <Grid container spacing={2}>
            <StyledCard >
                <StyledCardMedia
                    image={image}
                />
                <CardContent sx={{ height: '125px' }}>
                    <Typography gutterBottom >
                        {date}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {newsTitle}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginLeft: 1 }}>
                    <Button size="small">Ver mais</Button>
                    <ArrowForwardIcon sx={{ fontSize: 16 }}></ArrowForwardIcon>
                </CardActions>
            </StyledCard>
        </Grid>
    )
}

export default NewsCard