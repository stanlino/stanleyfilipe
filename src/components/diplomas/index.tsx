import React from 'react'

import {
  Ancor,
  Container
} from './styles'

interface IDiplomaProps {
  name: string;
  link: string;
  color: string;
}

function Diploma({ name, link, color }: IDiplomaProps) {
  return (
    <Ancor color={color} href={link} target="_blank" rel="noreferrer">
      <span>{name}</span>
    </Ancor>
  )
}

export function Diplomas(){
  return (
    <Container>
      <h2>Click to see my certificates</h2>
      <div>
        <Diploma name='ReactJS' link='https://app.rocketseat.com.br/certificates/f4584d47-a958-4586-9995-693374666752' color='#61dbfb'/>
        <Diploma name='React Native' link='https://app.rocketseat.com.br/certificates/0e20cc6d-f91c-4e7b-ba2b-704270a3dd5e' color='#318fa7'/>
        <Diploma name='NodeJS' link='https://app.rocketseat.com.br/certificates/fc5823b6-9dc1-418e-b5da-0962b01e1d9f' color='#3c873a'/>
      </div>
    </Container>
  )
}