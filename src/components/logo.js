import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const ContainerLogo = styled.span`
  display: inline-flex;
  align-items: center;
  height: 100px;
  padding: 10px;
  transition: 200ms ease;

  &:hover {
    transform: scale(0.98);
    opacity: 50%
  }

`

const Logo = ({ active }) => {
    const pathImg = `/logos/logo${useColorModeValue('-dark', '-white')}.svg`
    return (
      <Link href="/">
        <a>
          <ContainerLogo>
            <Text
              ml="4"
              fontSize={28}
              color={useColorModeValue('#282a36', '#f8f8f2')}
              fontFamily='MedievalSharp; cursive'
              fontWeight="bold"
            >
            RPG
          </Text>
          </ContainerLogo>
        </a>
      </Link>
    )
}

export default Logo
