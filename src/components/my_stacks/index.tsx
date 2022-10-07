import Image from 'next/image'
import React from 'react'
import { Container } from './styles'

const stacks = [
  { name: 'Typescript', img_end_point: '/typescript/typescript-original.svg' },
  { name: 'NodeJs', img_end_point: '/nodejs/nodejs-original.svg' },
  { name: 'ReactJS', img_end_point: '/react/react-original.svg' },
  { name: 'Android', img_end_point: '/android/android-original.svg' },
  { name: 'Android Studio', img_end_point: '/androidstudio/androidstudio-original.svg' },
  { name: 'Firebase', img_end_point: '/firebase/firebase-plain.svg' },
  { name: 'VSCode', img_end_point: '/vscode/vscode-original.svg' },
  { name: 'Git', img_end_point: '/git/git-original.svg' },
  
]

const IMAGES_API = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export function MyStacks(){
  return (
    <Container>
      <div className='stacks'>
        {stacks.map(stack => (
          <div key={stack.name} className='image_container'>
            <Image 
              src={`${IMAGES_API}${stack.img_end_point}`} 
              alt={`logo do ${stack.name}`} 
              title={stack.name}
              width={50}
              height={50}
              objectFit='contain'
              layout='responsive'
            />
          </div>
        ))} 
      </div>
    </Container>
  )
}