import * as S from './styles';

import Nav from './Nav';

const Logo = require("../../assets/logo/AUTARQUIA_LOGO.png");

export default function Navbar() {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} />
        <Nav />
      </S.Nav>
    </>
  )
}
