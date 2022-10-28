import React from 'react'
import { useTranslation } from "react-i18next";

import { Text } from './styles';
import { useTypewriter } from 'react-simple-typewriter';

export function Greetings(){

  const { t, i18n } = useTranslation()

  const [text, count] = useTypewriter({
    words: ['web', 'backend', 'mobile', 'Javascript'],
    loop: 1,
  })

  const language = i18n.language
  
  const emojis = ['💻', '👨‍💻', '📱', '😅']

  return (
    <Text>
      <>
        {t('greetings.1')} <strong>Stanley</strong>!👋<br />
        {t('greetings.2')}{' '}
        {language === 'pt' && 'desenvolvedor '}
        <strong>{text}</strong> 
        {language === 'en' && ' developer'}
        {` ${emojis[Number(count) - 1]}`} 
      </>
    </Text>
  )
}