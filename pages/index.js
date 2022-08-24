import { Box, Button, Container, Heading, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import HomePage from '../components/home/HomePage'

export default function Home() {
  return (
    <div >
      <Head>
        <title>IMS - Instant Medical Support</title>
        <meta name="description" content="Instant Medical Support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="container.xl">
       <HomePage/>
      </Container>

    </div>
  )
}


