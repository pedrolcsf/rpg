import { Box, Button, Flex, Image, Input, Select, Text } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { FaDiceD20, FaEdit } from 'react-icons/fa'

const Token = ({
  name,
  life,
  maxLife,
  effortPoints,
  maxEffortPoints,
  displacement,
  nivel,
  armorClass
 }) => {
  const [atualDice, setAtualDice] = useState(0)
  const [diceValue, setDiceValue] = useState(0)

  const handleRollDice = useCallback(() => {
    console.log(atualDice)
    var min = Math.ceil(0);
    var max = Math.floor(atualDice);
    setDiceValue(Math.floor(Math.random() * (max - min)) + min)
  }, [atualDice])

  return (
    <Flex
      padding="8px"
      align="center"
      bg="#44475a"
      w="100%"
      ml="16px"
      borderRadius="4px"
    >
      <Image w="160px" mr="16px" h="160px" src="/token.png" />
      <Flex w="100%" justifyContent="space-between">
      <Flex flexDir="column">
        <Box>
          <Text textDecoration="underline" fontSize="18px" fontFamily='MedievalSharp; cursive' fontWeight="bold">{name}</Text>
        </Box>

        <Box mt="12px">
          <Text
            fontSize="16px"
            mb="6px"
            fontFamily="Almendra; serif"
            fontWeight="500"
          >Vida: {`${life}/${maxLife}`}
          </Text>
          <Text
            fontSize="16px"
            mb="6px"
            fontFamily="Almendra; serif"
            fontWeight="500"
          >PE: {`${effortPoints}/${maxEffortPoints}`}
          </Text>
          <Text
            fontSize="16px"
            mb="6px"
            fontFamily="Almendra; serif"
            fontWeight="500"
            >CA: {armorClass}
          </Text>
          <Text
            fontSize="16px"
            mb="6px"
            fontFamily="Almendra; serif"
            fontWeight="500"
          >Deslocamento: {displacement}
          </Text>
          <Text
            fontSize="16px"
            mb="6px"
            fontFamily="Almendra; serif"
            fontWeight="500"
          >Nível: {nivel}
          </Text>
        </Box>
      </Flex>
      <Flex paddingRight="16px" pt="8px" pb="8px" flexDir="column" justifyContent="space-between">
        <Button size="sm"><FaEdit /></Button>
        
        <Box>
        <Flex>
          <Select size="sm" onChange={(e) => setAtualDice(e.target.value)}>
            <option value={100}>D100</option>
            <option value={20}>D20</option>
            <option value={12}>D12</option>
            <option value={10}>D10</option>
            <option value={6}>D6</option>
            <option value={4}>D4</option>
          </Select>
          <Button onClick={handleRollDice} ml="2" size="sm"><FaDiceD20 /></Button>
        </Flex>

        <Input value={diceValue} mt="2" w="160px" size="sm" />
        </Box>
        
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Token