import React from 'react'
import { useRouter } from 'next/router'
import { Button, Image } from '@nextui-org/react'
import img from '../assets/404.png';

const NotFound = ({ title = 'Страница не найдена' }) => {

  const router = useRouter()
  console.log(img);
  return (
    <div className='notFound'>
      <Image src={img.src} alt='404' />
      <h1>{title}</h1>
      <Button ghost onClick={() => router.back()} > вернуться назад </Button>
    </div>
  )
}

export default NotFound