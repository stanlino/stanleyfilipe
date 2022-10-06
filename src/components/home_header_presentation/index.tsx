import React from 'react'
import Typewriter from 'typewriter-effect';

import styles from './styles.module.css'

export function HomeHeaderPresentation(){
  return (
    <h1 className={styles.title}>
      <Typewriter
        options={{
          autoStart: true,
        }}
        onInit={typewriter => {
          typewriter
            .changeDelay(100)
            .typeString('Hi my name is s')
            .pauseFor(200)
            .deleteChars(1)
            .typeString('<em>Stanley</em>!')
            .pauseFor(250)
            .typeString('👋')
            .pauseFor(500)
            .changeDelay(50)
            .typeString('<br/> I am a web developer')
            .pauseFor(100)
            .typeString(', backend developer')
            .pauseFor(50)
            .changeDelay(60)
            .typeString(' and mobile develop')
            .pauseFor(500)
            .changeDeleteSpeed(1)
            .deleteChars(51)
            .typeString('<strong>Typescript</strong> developer')
            .pauseFor(500)
            .typeString('!')
            .pauseFor(1000)
            .typeString('😅')
            .start();
        }}
      />
    </h1>
  )
}