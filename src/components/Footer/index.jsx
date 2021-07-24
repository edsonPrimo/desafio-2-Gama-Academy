import React, { useState } from 'react';
import styled from 'styled-components';
import {cor2 } from '../UI/variaveis';

import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im'

const Rodape = styled.footer`
  height: 140px;
  background: #272626;
  width: 100%;
  padding: 1rem;
  position: fixed;
  bottom: 0%;
`
const Paragrafo = styled.p`
  text-align: center;
  color: #ffffffb9;
`
const BoxSocialMedias = styled.div`
  display: flex;
  width: 200px;
  margin: 1rem auto;
  justify-content: space-between;

  a {
    color: inherit
  }

`
const Span = styled.span`
  background: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
function Footer() {

  return (
    <Rodape id="contato">
      <Paragrafo>©Copyright EdboaDev.</Paragrafo>
      <Paragrafo>Página feita para o desafio da Gama Academy</Paragrafo>
      <BoxSocialMedias>
        <a href='https://www.facebook.com/edson.primo.5'>
          <Span><ImFacebook size='24' /></Span>
        </a>
        <a href='https://www.instagram.com/edson.primo/'>
          <Span><ImInstagram size='24' /></Span>
        </a>
        <a href='https://twitter.com/edboaaa'>
          <Span><ImTwitter size='24' /></Span>
        </a>
      </BoxSocialMedias>
    </Rodape>
  )
}

export default Footer