'use client'

import { store as setupStore } from '@/redux/store/store'
import React from 'react'
import { Provider } from 'react-redux'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  const store = setupStore()

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
