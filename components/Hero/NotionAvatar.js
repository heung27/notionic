// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'

const NotionAvatar = (props) => (
  <Image
    fill
    src='https://github.com/heung27/notionic/blob/main/public/mimo.png'
    className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
  />
)

export default NotionAvatar
