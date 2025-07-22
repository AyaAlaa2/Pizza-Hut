import React from 'react'
import { Container } from 'react-bootstrap'
import HeroImg from '/Img/Hero Img.jpg'
import { Link } from 'react-router-dom'

export default function HeroPage() {
  return (
    <Container className='HeroPage p-0 m-0 mt-5 mb-3 z-1'>
        <Link to="/" >
          <img src={HeroImg} />
        </Link>
    </Container>
  )
}
