import React from 'react';
import styled from 'styled-components'
import {cor3, cor5} from '../UI/variaveis'

import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Pimentas/logo.png'

const Cabecalho = styled.header`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 3rem;

`
const Item = styled.li`
  font-size: 1.3rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${cor3};
  box-shadow: 0 10px 10px rgb(126 126 126 / 10%);
  transition: 0.2s linear ;

  &:hover {
    box-shadow: none;
    transform: translateY(2px);
  }
  & span {
    color: ${cor5};
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    font-size: 1.6rem;
  }
`
const Lista = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 400px;
`

const ImagemLogo = styled.img`
  width: 250px;
`
function Header() {
  return (
    <Cabecalho>
      <Link to="/"><ImagemLogo src={Logo} alt="logo"/></Link>
      <nav>
        <Lista>
          <Item>
            <Link to="/produtos"><span>Produtos</span></Link>
          </Item>
          <Item>
            <Link to="/clientes"><span>Clientes</span></Link>
          </Item>
        </Lista>
      </nav>
    </Cabecalho>

  )

}
export default Header