import Head from 'next/head'

// Header
import Header from '../components/header'

import { Box, Container } from '@chakra-ui/react'
import Footer from '../components/footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb="8">
    <Head>
      <title>RPG - System</title>
      <meta name="description" content="RPG System." />
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet" />
    </Head>
    <Header path={router.asPath} />
    {/* maxW certo é = container.md */}
      <Container maxW="980" pt={16} pb={16}>
        {children}
      </Container>
    <Footer />
    </Box>
  )
}

export default Main
