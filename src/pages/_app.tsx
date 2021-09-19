import React from 'react'
import { AppProps } from 'next/app'
import { ModalProvider } from '../context/Modal'

import '../styles/tailwind.css'
import '../styles/style.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
