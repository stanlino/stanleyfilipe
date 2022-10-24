import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Container, 
  ImageContainer
} from './styles'

export function About(){
  
  const { t } = useTranslation()

  return (
    <Container>
      <ImageContainer>
        <Image 
          src='/eu.jpg'
          objectFit='contain'
          alt={t('accessibility.about_me_img')} 
          layout='fill'
        />
      </ImageContainer>
      <p>
        <>
          <span><>{t('titles.about_me')}</></span>
          {t('about_me.1')}{' '} 
          <a href='http://www.ifto.edu.br/' target="_blank" rel="noreferrer">
            Instituto Federal do Tocantins - Campus Palmas.
          </a>
          {' '}{t('about_me.2')}{' '} 
          <a href='https://lp.rocketseat.com.br/ignite' target="_blank" rel="noreferrer">
            <>
              {t('about_me.rocketseat_ignite')}
            </>
          </a> 
          {' '}{t('about_me.3')}
        </>
      </p>
    </Container>
  )
}