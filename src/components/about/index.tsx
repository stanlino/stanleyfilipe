import Image from 'next/image'
import React from 'react'

import {
  Container, 
  ImageContainer
} from './styles'

export function About(){
  return (
    <Container>
      <ImageContainer>
        <Image 
          src='/eu.jpg'
          objectFit='contain'
          alt='Um lindo rapaz sorrindo para a câmera' 
          layout='fill'
        />
      </ImageContainer>
      <p>
        <h3>About me</h3>
        Computer technician graduated in 2020 at{' '} 
        <a href='http://www.ifto.edu.br/' target="_blank" rel="noreferrer">
          Instituto Federal do Tocantins - Campus Palmas.
        </a>
        {' '}Since then I have studied the javascript ecosystem with a focus on the front end.
        {' '}I recently had the opportunity to join{' '} 
        <a href='https://lp.rocketseat.com.br/ignite' target="_blank" rel="noreferrer">
          {"Rocketseat's Ignite"}
        </a> 
        {' '}training program and consolidate my studies. {"I'm"} looking for my first job as a web/mobile developer!
      </p>
    </Container>
  )
}