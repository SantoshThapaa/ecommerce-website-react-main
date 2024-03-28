import React from 'react'
import Carousel from '../components/Carousel'
import IncrementDecrement from '../hooks/IncrementDecrement'
import Effect from '../hooks/Effect'
import Datafetch from '../components/Datafetch'
import CardContainer from '../components/CardContainer'

const HomePage = () => {
  return (
    <>
        <Carousel/>
        <CardContainer/>
        {/* <IncrementDecrement/>
        <Effect/> */}
        {/* <Datafetch/> */}
    </>
  )
}

export default HomePage