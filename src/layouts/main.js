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
