import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Translate } from '../atomic/Text'

import {
  Container
} from './styles'

interface LastCommitDTO {
  commit: {
    commit: {
      author: {
        date: Date
      }
    }
  }
}

export function Footer(){

  const { i18n } = useTranslation()

  const [lastCommit, setLastCommit] = useState({} as LastCommitDTO)

  useEffect(() => {
    
    fetch('https://api.github.com/repos/stanlino/stanleyfilipe/branches/main')
      .then(response => response.json())
      .then(data => {
        setLastCommit(data)
      })

  }, [])

  const language = i18n.language

  if (!lastCommit.commit) {
    return null
  }

  const { commit: { commit: { author: { date } } } } = lastCommit

  const last_update_date = new Date(date).toLocaleDateString(language, {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (
    <Container>
      <span><Translate text='titles.last_update_on' /> {last_update_date}</span>
    </Container>
  )
}