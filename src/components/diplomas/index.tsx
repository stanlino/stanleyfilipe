import Image from 'next/image';
import React from 'react'
import { Translate } from '../atomic/Text';

import {
  Ancor,
  Container
} from './styles'

interface IDiplomaProps {
  name: string;
  link: string;
  color: string;
  img: string;
}

function Diploma({ name, link, color, img }: IDiplomaProps) {
  return (
    <Ancor color={color} href={link} target="_blank" rel="noreferrer">
      <Image src={`/svg/${img}`} alt={name} width={50} height={50} />
      <span>{name}</span>
    </Ancor>
  )
}

export function Diplomas(){
  return (
    <Container>
      <h3>
        <Translate text='titles.certificates' />
      </h3>
      <Diploma 
        name='ReactJS' 
        link='https://app.rocketseat.com.br/certificates/f4584d47-a958-4586-9995-693374666752' 
        color='#4cbad3'
        img='reactJS-ignite.svg'
      />
      <Diploma 
        name='React Native' 
        link='https://app.rocketseat.com.br/certificates/0e20cc6d-f91c-4e7b-ba2b-704270a3dd5e' 
        color='#4762ff'
        img='react-native-ignite.svg'
      />
      <Diploma 
        name='NodeJS' 
        link='https://app.rocketseat.com.br/certificates/fc5823b6-9dc1-418e-b5da-0962b01e1d9f' 
        color='#8bc84a'
        img='nodeJS-ignite.svg'
      />
    </Container>
  )
}