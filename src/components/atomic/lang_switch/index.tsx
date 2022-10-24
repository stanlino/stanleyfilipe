import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Container
} from './styles'

export function LangSwitch(){

  const { i18n, t } = useTranslation()

  const theCurrentLanguageIsEnglish = i18n.language === 'en'

  function switchLanguage() {
    i18n.changeLanguage(
      theCurrentLanguageIsEnglish ? 'pt' : 'en'
    )
  }

  return (
    <Container>
      <Image  
        width={30}
        height={30}
        src='/png/estados-unidos.png'
        alt={t('accessibility.EUA_flag')}
      />

      <label aria-label='change page language' className="switch">
        <input 
          checked={!theCurrentLanguageIsEnglish} 
          onChange={switchLanguage} 
          type="checkbox" 
          aria-label='change page language'
        />
          
        <span className="slider" />
      </label>
      
      <Image  
        width={30}
        height={30}
        src='/png/brazil.png'
        alt={t('accessibility.BR_flag')}
      />
    </Container>
  )
}