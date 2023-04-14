import * as S from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

interface Slide {
  image: string;
}

const image1 = require("../../assets/img/image1.png");
const image2 = require("../../assets/img/image2.png");
const image3 = require("../../assets/img/image3.png");
const image4 = require("../../assets/img/image4.png");
const image5 = require("../../assets/img/image5.png");
const image6 = require("../../assets/img/image6.png");

const data = [
  {
    image: image1
  },
  {
    image: image2
  },
  {
    image: image3
  },
  {
    image: image4
  },
  {
    image: image5
  },
  {
    image: image6
  },
];

const CarouselPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
              <S.NormalMedia src={d.image} alt="images" />
            </div>
          ) : null;
        })}
      </Grid>
      <S.Span style={{ backgroundColor: 'rgba(100, 174, 135, 0.6)' }}>
        <Grid sx={{
          width: '90%',
          height: isDesktop ? '50%' : '65%',
        }}>
          <Typography sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 28,
            textAlign: 'start',
            opacity: 1
          }}>
            Apoio extraordinário à Associação Humanitária dos Bombeiros
          </Typography>
        </Grid>
        {isDesktop ? <Grid sx={{ width: '90%' }}>
          <Typography sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: 2,
            textAlign: 'start',
            cursor: 'pointer'
          }}>
            Saber mais
          </Typography>
        </Grid> : null
        }
      </S.Span>
      <S.StyledDivCarousel>
        {isDesktop ? <Grid item xs={0} mt={'100px'} mr={'10px'}>
          <Grid container>
            <S.ArrowIcon>
              <ArrowBackIcon onClick={prevSlide}></ArrowBackIcon>
            </S.ArrowIcon>
            <S.ArrowIcon>
              <ArrowForwardIcon onClick={nextSlide}></ArrowForwardIcon>
            </S.ArrowIcon>
          </Grid>
        </Grid> : null}
        <Grid>
          <Grid item xs={0}>
            <S.SmallMediaWrapper>
              {data.map((d: Slide, index: number) => {
                return (
                  <S.SmallMedia key={index} src={d.image} alt="images" />
                );
              })}
            </S.SmallMediaWrapper>
          </Grid>
        </Grid>
      </S.StyledDivCarousel>
    </Grid>
  );
};

export default CarouselPage;
