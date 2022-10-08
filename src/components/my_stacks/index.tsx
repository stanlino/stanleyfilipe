import Image from 'next/image'
import React from 'react'
import { stacks } from '../../utils/stacks'
import { Container } from './styles'

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