import dynamic from 'next/dynamic'
import React from 'react'
import Card from './shared/Card'

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false
})
export default function CarouselCheck() {
  return (
    <Carousel plugins={['infinite', 'arrows']}>
      <Card
        title="Day Trade"
        desc="Operações diárias alavancadas"
        beforeValue={1}
        actuallyValue={0}
      />
      <Card
        title="Day Trade"
        desc="Operações diárias alavancadas"
        beforeValue={1}
        actuallyValue={0}
      />
      <Card
        title="Day Trade"
        desc="Operações diárias alavancadas"
        beforeValue={1}
        actuallyValue={0}
      />
      <Card
        title="Day Trade"
        desc="Operações diárias alavancadas"
        beforeValue={1}
        actuallyValue={0}
      />
    </Carousel>
  )
}
