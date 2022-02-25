import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Token from '../components/token'

export default function Home() {
  return (
    <>
    <Flex justifyContent="center">
      <Text
        fontFamily='MedievalSharp; cursive'
        fontWeight="bold"
        fontSize="24"
        mb="4"
      >Dashboard do Mestre</Text>
    </Flex>
    <Flex flexDir="row">
      <Token
        w="100%"
        name="Heitor Berdoneli"
        life={40}
        maxLife={40}
        effortPoints={35}
        maxEffortPoints={35}
        nivel={3}
        displacement={9}
        armorClass={12}
      />
      <Token
        w="100%"
        name="Israel"
        life={40}
        maxLife={40}
        effortPoints={35}
        maxEffortPoints={35}
        nivel={3}
        displacement={9}
        armorClass={12}
      />
    </Flex>
    </>
  )
}
