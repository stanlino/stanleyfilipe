import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Container
} from './styles'

export function LangSwitch(){

  const { i18n } = useTranslation()

  function switchLanguage() {
    i18n.changeLanguage(
      i18n.language === 'en' ? 'pt' : 'en'
    )
  }

  return (
    <Container>
      <Image  
        width={30}
        height={30}
        src='/png/estados-unidos.png'
        alt='Bandeira do brasil'
      />

      <label className="switch">
        <input onClick={switchLanguage} type="checkbox" />
          
        <span className="slider" />
      </label>
      
      <Image  
        width={30}
        height={30}
        src='/png/brazil.png'
        alt='Bandeira do brasil'
      />
    </Container>
  )
}