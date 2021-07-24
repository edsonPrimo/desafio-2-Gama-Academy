import React from 'react';
import logo from '../../assets/images/Pimentas/logo_rotulo-edit.png'
import styled from 'styled-components';
import { cor4 } from '../../components/UI/variaveis';

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1d1c1cd4;
  padding: 2rem;
  height: 50vh;
  margin-top: 3rem;

  & h1 {
    width: 60%;
    color: ${cor4};
  }
`
function Home() {
  return (
   
    <Main>
        <img src={logo} alt='rotulo com o logo' width='250px'/>
        <h1> Acesso ao inventário da sgt. Peppers. Navegue pelo cabeçalho</h1>

    </Main>
    
  )
}

export default Home
