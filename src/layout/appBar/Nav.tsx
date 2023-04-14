import { useState } from 'react';
import * as S from './styles';

import RightNav from './RightBar';

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.StyledNav open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledNav>
      <RightNav open={open} />
    </>
  )
}
export default Nav
