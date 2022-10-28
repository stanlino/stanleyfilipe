/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translate } from '../atomic/Text'
import { Diplomas } from '../diplomas'

import {
  Container, 
  ImageContainer,
  Links,
  Paragraph
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
      <div className='about'>
        <h3>
          <Translate text={'titles.about_me'} />
        </h3>
        <Paragraph>
          <>
            <Translate text='about_me.1' />

            <a href='http://www.ifto.edu.br/' target="_blank" rel="noreferrer">
              Instituto Federal do Tocantins - Campus Palmas.
            </a>

            <Translate text='about_me.2'/>
            
            <a href='https://lp.rocketseat.com.br/ignite' target="_blank" rel="noreferrer">
              <Translate text='about_me.rocketseat_ignite' />
            </a>

            <Translate text='about_me.3' />
          </>
        </Paragraph>
        <Links>
          <a href="https://www.linkedin.com/in/stanley-filipe-neiva-298465164/" target="_blank" rel="noreferrer">
            <img src='https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='linkedin' />
          </a>
          <a href="https://github.com/stanlino" target="_blank" rel="noreferrer">
            <img src='https://img.shields.io/badge/-Github-000000?style=for-the-badge&logo=github&logoColor=white' alt='github' />
          </a>
        </Links>
      </div>
      <Diplomas />
    </Container>
  )
}