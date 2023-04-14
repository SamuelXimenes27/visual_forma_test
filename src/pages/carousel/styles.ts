import styled from "styled-components";

export const ArrowIcon = styled.div`
  width: 40px;
  text-align: end;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const NormalMedia = styled.img`
  width: 100%;
  height: 670px;
  filter: brightness(50%);

  @media (max-width: 768px) {
    width: 100%;
    height: 380px;
    filter: brightness(50%);
  }
`

export const SmallMedia = styled.img`
  width: 210px;
  height: 121px;
  margin-right: 12px;
  border-radius: 2px;
`;

export const StyledDivCarousel = styled.div`
 position: absolute;
 display: flex;
 flex-direction: row;
 width: 100%;
 height: 120px;
 margin: 32% 0 0 33%;

  @media (max-width: 800px) {
    height: 400px;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

    &.active {
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1.2);
      z-index: 2;
    }
  }

  .slide-small {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 200px;
    right: 35%;
    top: 80px;
  }
`;

export const SmallMediaWrapper = styled.div`
  display: flex;
  overflow-x: visible;
  height: 400px;

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

  .slide {
    padding: 0 10px;
    width: 240px;
  }
`;

export const Span = styled.div`
  position: relative;
  bottom: 340px;
  width: 40%;
  height: 230px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 35%;

  @media (max-width: 768px) {
    width: 60%;
    height: 200px;
    left: 20%;
    bottom: 300px;
  }
`;


