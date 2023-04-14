import { Divider, Grid, Slide, Typography, useMediaQuery } from '@mui/material'
import { ArrowController, NormalMedia, StyledContainer, StyledSpan } from './styles';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Slide {
    image: string;
}

const SliderPage = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const image1 = require("../../assets/img/image1.png");
    const image2 = require("../../assets/img/image8.png");

    const data = [
        {
            image: image2
        },
        {
            image: image1
        },
    ];

    const [current, setCurrent] = useState<number>(0);

    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

    return (

        <Grid container>
            <Grid item xs={0} />
            <Grid item>
                {data.map((d: Slide, index: number) => {
                    return current === index ? (
                        <div key={index}>
                            <NormalMedia src={d.image} alt="images" />
                        </div>
                    ) : null;
                })}
            </Grid>
            <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                <StyledContainer>
                    <Grid container ml={isDesktop ? 15 : ''}>
                        <StyledSpan>
                            <Typography sx={{ color: 'white', fontSize: 24, textAlign: 'start', marginLeft: '5%' }}>Nome do albúm e/ou Imagem Vídeo</Typography>
                            {isDesktop ? <ArrowForwardIcon sx={{ color: 'white', fontSize: 18, cursor: 'pointer' }}></ArrowForwardIcon> : null}
                        </StyledSpan>
                    </Grid>
                    <Grid container ml={isDesktop ? 32.5 : '5%'}>
                        <ArrowController>
                            <ArrowBackIcon onClick={prevSlide} sx={{ color: 'white' }}></ArrowBackIcon>
                            <Divider sx={{ height: '80%', backgroundColor: 'white', width: '1px' }} />
                            <ArrowForwardIcon onClick={nextSlide} sx={{ color: 'white' }}></ArrowForwardIcon>
                        </ArrowController>
                    </Grid>
                </StyledContainer>
            </Grid>
        </Grid >
    )
}

export default SliderPage