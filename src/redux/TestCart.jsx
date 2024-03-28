import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './TestItem'
import Student from './Studnet'

const TestCart = () => {
    const data = useSelector(argStore=>argStore.cart)
  return (
    <>
    <h2>The total number of items in the care is {data.cartCount}</h2>

    <TestItem/>
    <Student/>
    </>
  )
}

export default TestCart