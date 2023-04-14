import * as S from './styles';

type Props = {
  open: boolean;
}

const Logo = require("../../assets/logo/AUTARQUIA_LOGO.png");

function RightNav(props: Props) {

  return (
    <S.Ul open={props.open}>
      <S.LogoUl src={Logo}/>

      <S.StyledNavLink to="/"
      >
        <li>Munícipio</li>
      </S.StyledNavLink>
      <S.StyledNavLink to="/"
      >
        <li> Autarquia360</li>
      </S.StyledNavLink>
      <S.StyledNavLink to="/"
      >
        <li>Atividade Municipal</li>
      </S.StyledNavLink>
      <S.StyledNavLink to="/"
      >
        <li>Serviços Online</li>
      </S.StyledNavLink>
      <S.StyledNavLink to="/"
      >
        <li>Contactos</li>
      </S.StyledNavLink>
    </S.Ul>

  )
}

export default RightNav
