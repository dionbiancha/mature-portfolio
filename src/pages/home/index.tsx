import React from 'react'
import Head from 'next/head'

import Container from '../../components/Container'
import Header from './header'
import TopContent from './topContent'
import Introdution from './introdution'
import MyClients from './myClients'
import Depositions from './depositions'

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Dionei Bianchati</title>
    </Head>

    <Header />
    <TopContent />
    <Introdution />
    <MyClients />
    <Depositions />
  </Container>
)

export default Home
