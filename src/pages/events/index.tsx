import { Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import { StyledCardsEvent, StyledTabEvent } from './styles'
import EventCard from './components/EventCard';
import WeekActivity from './components/WeekActivity';

const EventsPage = () => {
    const colors = ["#246970", "#69A391", "#FDAC1D", "#21878F"];
    const isDesktop = useMediaQuery("(min-width: 768px)");


    const eventsData = [
        {
            title: 'Concurso de Poesia Versos Entrelaçados',
            dayOfWeek: '4',
            day: 'Sábado',
            month: 'Agosto',
            year: '2020',
            description: 'Local do Evento',
            time: '10h30',
            haveTwoDate: false,
        },
        {
            title: 'Concurso de Poesia Versos Entrelaçados',
            dayOfWeek: '29',
            day: 'Domingo',
            month: 'Dezembro',
            year: '2020',
            description: 'Local do Evento',
            time: '10h30',
            haveTwoDate: false,
        },
        {
            title: 'Concurso de Poesia Versos Entrelaçados',
            dayOfWeek: '12',
            day: 'Segunda',
            month: 'Agosto',
            year: '2020',
            description: 'Local do Evento',
            time: '10h30',
            haveTwoDate: false,
        },
        {
            title: 'Concurso de Poesia Versos Entrelaçados',
            dayOfWeek: '23',
            day: '',
            month: 'Dezembro',
            year: '2020',
            description: 'Local do Evento',
            time: '10h30',
            haveTwoDate: true,
            dayOfWeekSecond: '02',
            monthSecond: 'Janeiro',
            yearSecond: '2021',
        },
    ];

    const WeekData = [
        {
            dayOfWeek: 'Quinta-feira',
            time: '19h30',
            title: 'Aula de Dança',
        },
        {
            dayOfWeek: 'Quinta-feira',
            time: '19h30',
            title: 'Hora do Conto',
        },
        {
            dayOfWeek: 'Quinta-feira',
            time: '19h30',
            title: 'Aula de Dança',
        },
    ]

    return (
        <Grid container sx={{
            display: 'flex',
            flexDirection: isDesktop ? 'column' : 'row',
            width: '100%',
            height: isDesktop ? 600 : '100em',
        }}
            mt={isDesktop ? 0 : 15}
        >
            <Grid container sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
            }} ml={isDesktop ? 25 : '25%'}>
                <Grid container sx={{ height: 580 }}>
                    <StyledTabEvent item xs={12}>
                        <Grid>
                            <Typography sx={{
                                fontSize: 26,
                                textTransform: 'uppercase',
                            }}>Eventos</Typography>
                            <Divider sx={{ width: '80%', backgroundColor: '#64AE87' }} />
                        </Grid>
                        {isDesktop ? <Typography sx={{
                            fontSize: 20,
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }}>Ver todos</Typography> : null}
                    </StyledTabEvent>
                    <StyledCardsEvent item xs={12}>
                        <Grid container spacing={5}>
                            {eventsData.map((event, index) => (
                                <Grid item xs={12} sm={isDesktop ? 6 : 0} md={6} lg={6} key={event.title}>
                                    <EventCard
                                        dayOfWeek={event.dayOfWeek}
                                        day={event.day}
                                        monthAndYear={event.month + " " + event.year}
                                        eventTitle={event.title}
                                        eventLocation={event.description}
                                        eventTime={event.time}
                                        haveTwoDate={event.haveTwoDate}
                                        dayOfWeekSecond={event.dayOfWeekSecond}
                                        monthAndYearSecond={event.monthSecond + " " + event.yearSecond}
                                        colors={{ backgroundColor: colors[index % colors.length] }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </StyledCardsEvent>
                    {isDesktop ? null : <Grid ml={'40%'} mt={65}>
                        <Typography sx={{
                            fontSize: 20,
                            textTransform: 'uppercase',
                            color: '#64AE87',
                            borderBottom: '1px solid #64AE87',
                            cursor: 'pointer'
                        }}>Ver todos</Typography>
                    </Grid>}
                </Grid>
            </Grid>
            <Grid sx={{ marginLeft: isDesktop ? null : '23%', marginTop: isDesktop ? null : 55 }} mr={20}>
                <WeekActivity title='Atividades da semana' items={WeekData} />
            </Grid>
        </Grid>
    )
}

export default EventsPage