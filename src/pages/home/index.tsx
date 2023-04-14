import { useState } from 'react'
import { Container } from "./styles";
import CarouselPage from '../carousel';
import NewsPage from '../news';
import EventsPage from '../events';
import SliderPage from '../slider';
import DocumentsPage from '../documents';
import LinksPage from '../links';
import Footer from '../footer';


const LandingPage = () => {

  return (
    <Container>
      <CarouselPage />
      <NewsPage />
      <EventsPage />
      <SliderPage />
      <DocumentsPage />
      <LinksPage />
      <Footer />
    </Container>
  )
}

export default LandingPage