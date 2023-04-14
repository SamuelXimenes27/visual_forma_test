import styled from "styled-components";

export const NormalMedia = styled.img`
  width: 90%;
  height: 470px;
  margin-left: 200px;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }
`

export const ArrowController = styled.div`
    width: 180px;
    height: 90px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.unnamed._21878F};
`;

export const StyledContainer = styled.div`
  position: relative;
  bottom: 100px;
  left: 11%;
  width: 75%;
  height: 130px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const StyledSpan = styled.div`
    width: 650px;
    height: 90px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.unnamed._21878F};
    text-align: center;
    display: flex;
`;