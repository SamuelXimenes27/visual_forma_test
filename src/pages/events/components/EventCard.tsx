import { CardContent, Grid, Typography } from '@mui/material';
import { StyledDate, StyledDateContainer, StyledEventCard } from '../styles';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { GlobalStyle } from '../../../styles/global';

interface EventCardProps {
    eventTitle: string;
    dayOfWeek: string;
    day: string;
    monthAndYear: string;
    eventLocation: string;
    eventTime: string;
    haveTwoDate: boolean;
    dayOfWeekSecond: any;
    monthAndYearSecond: any;
    colors: any;
}

const EventCard: React.FC<EventCardProps> = ({ dayOfWeek, day, monthAndYear, eventTitle, eventLocation, eventTime, haveTwoDate, dayOfWeekSecond, monthAndYearSecond, colors }) => {
    return (
        <StyledEventCard>
            <GlobalStyle />
            <StyledDateContainer style={colors}>
                {haveTwoDate ? <>
                    <StyledDate variant="h3" color={'white'} fontWeight={'bold'}>
                        {dayOfWeek}
                    </StyledDate>
                    <Typography variant="subtitle2" color={'white'} fontWeight={'medium'} textTransform={'uppercase'}>
                        {monthAndYear}
                    </Typography>
                    <Grid sx={{ height: 15 }} />
                    <StyledDate variant="h3" color={'white'} fontWeight={'bold'}>
                        {dayOfWeekSecond}
                    </StyledDate>
                    <Typography variant="subtitle2" color={'white'} fontWeight={'medium'} textTransform={'uppercase'}>
                        {monthAndYearSecond}
                    </Typography>
                </> : <>
                    <StyledDate variant="h2" color={'white'} fontWeight={'bold'}>
                        {dayOfWeek}
                    </StyledDate>
                    <Typography variant="subtitle2" color={'white'} fontWeight={'medium'} textTransform={'uppercase'}>
                        {day}
                    </Typography>
                    <Typography variant="subtitle2" color={'white'} fontWeight={'medium'} textTransform={'uppercase'}>
                        {monthAndYear}
                    </Typography>
                </>}
            </StyledDateContainer>
            <CardContent sx={{ maxWidth: 200 }}>
                <Typography variant="body2" component="p">
                    Categoria
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {eventTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <>
                        <PlaceOutlinedIcon sx={{ fontSize: 14 }} />
                        {eventLocation}
                    </>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <>
                        <AccessTimeOutlinedIcon sx={{ fontSize: 14 }} />
                        {eventTime}
                    </>
                </Typography>
            </CardContent>
        </StyledEventCard>
    );
}

export default EventCard