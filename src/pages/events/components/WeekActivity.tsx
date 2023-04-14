import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Grid, Divider, useMediaQuery } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

interface Props {
    title: string;
    items: { dayOfWeek: string; time: string; title: string }[];
}

const WeekActivity: React.FC<Props> = ({ title, items }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <Container maxWidth="md" style={{ marginTop: isDesktop ? '100px' : 0, width: isDesktop ? '' : '500px' }}>
            <Box
                sx={{
                    backgroundColor: '#21878F',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80px',
                    maxWidth: '370px',
                }}
            >
                <Typography variant="h5" fontWeight="bold">{title}</Typography>
            </Box>
            <List sx={{ padding: 0 }}>
                {items.map((item) => (
                    <ListItem key={item.title}>
                        <ListItemText
                            primary={item.title}
                            secondary={
                                <Grid container sx={{ display: 'flex', flexDirection: 'row' }} >
                                    <Grid item xs={isDesktop? 4 : 4}>
                                        <CalendarTodayOutlinedIcon sx={{ fontSize: 14, marginRight: 1 }} />
                                        {`${item.dayOfWeek}`}
                                    </Grid>
                                    <Grid item xs={isDesktop? 4 : 4}>
                                        <AccessTimeOutlinedIcon sx={{ fontSize: 14, marginRight: 1 }} />
                                        {`${item.time}`}
                                    </Grid>
                                </Grid>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default WeekActivity;
