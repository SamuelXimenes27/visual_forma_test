import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
}

export const StyledNav = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: relative;
  right: 50px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.unnamed._246970};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  

  @media (max-width: 678px) {
    width: 100vw;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }

`

export const Ul = styled.ul<INav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 110px;
  margin-left: 20px;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.unnamed._246970};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.unnamed._64AE87};
    }
  }

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;
    text-align: start;

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #0DADEA;
      }
    }
  }
`
export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  && {
    @media (max-width: 925px) {
      font-size: 12px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Logo = styled.img`
  margin: 0px 0px 30px 10%;
  height: 50px;
  object-fit: contain;

  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }

`

export const LogoUl = styled.img`
  margin: 20px 50px 20px 5%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
    object-fit: contain;
  }
`
