import React from 'react'
import Head from 'next/head'

import { LottieView } from '../../components/atomic/lottie_view'

import {
  Container
} from './styles'

export default function NotFoundPage(){
  return (
    <>

      <Head>
        <title>Página não encontrada</title>
      </Head>

      <Container>
        <LottieView 
          animationConfig={{
            path: '/json/404.json',
            autoplay: true,
          }}
          
        />
        <span>Página não encontrada!</span>
      </Container>
    </>
  )
}