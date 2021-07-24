import React from 'react';
import logo from '../../assets/images/Pimentas/logo-rotulo.png'
import styled from 'styled-components';
import { cor2 } from '../../components/UI/variaveis';

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #272626;
  padding: 2rem;
  height: 40vh;
  margin-top: 3rem;

  & h1 {
    text-align: center;
    width: 60%;
    color: ${cor2};
  }
`
function Home() {
  return (
   
    <Main>
        <img src={logo} alt='rotulo com o logo' width='250px'/>
        <h1> Acesso ao inventário da Sgt. Peppers.</h1>

    </Main>
    
  )
}

export default Home
