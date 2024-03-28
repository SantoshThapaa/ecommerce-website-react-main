import React from 'react'
import GlobalContextProvider from './GlobalContext'
import ComA from './ComA'

const Show = () => {
  return (
    <GlobalContextProvider>
      <ComA />
    </GlobalContextProvider>
  )
}

export default Show