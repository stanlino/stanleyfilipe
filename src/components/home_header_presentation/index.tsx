import React from 'react'
import Typewriter from 'typewriter-effect';
import { Text } from './styles';

export function HomeHeaderPresentation(){
  return (
    <Text>
      <Typewriter
        options={{
          autoStart: true,
        }}
        onInit={typewriter => {
          typewriter
            .changeDelay(100)
            .typeString('Hi ')
            .deleteChars(1)
            .typeString(', my name is s')
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
            .typeString('<strong>Javascript</strong> developer')
            .typeString('!')
            .pauseFor(1000)
            .typeString('😅')
            .start();
        }}
      />
    </Text>
  )
}