import React from 'react'

import {
  Grid
} from './styles'

export function Redirects(){
  return (
    <Grid>
      <a href="https://github.com/stanlino" className='card'>
        <h2>Github &rarr;</h2>
        <p>browse my personal projects</p>
      </a>

      <a href="https://www.linkedin.com/in/stanley-filipe-neiva-298465164/" className='card'>
        <h2>Linkedin &rarr;</h2>
        <p>See a little about me and what I follow</p>
      </a>
    </Grid>
  )
}