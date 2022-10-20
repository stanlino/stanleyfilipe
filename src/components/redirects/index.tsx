import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Grid
} from './styles'

export function Redirects(){

  const { t } = useTranslation()

  return (
    <Grid>
      <a href="https://github.com/stanlino" className='card'>
        <h2>Github &rarr;</h2>
        <p><>{t('github_link')}</></p>
      </a>

      <a href="https://www.linkedin.com/in/stanley-filipe-neiva-298465164/" className='card'>
        <h2>Linkedin &rarr;</h2>
        <p><>{t('linkedin_link')}</></p>
      </a>
    </Grid>
  )
}