import { Badge, Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { Character } from '../../../models/Character';
import CharacterStatus from '../CharacterStatus';

type CharacterCardProps = Partial<Omit<Character, 'id' | 'type' | 'created'>>;

function CharacterCard({ name, status, image }: CharacterCardProps) {
  return (
    <Flex w="100%" borderRadius="8" bgColor="gray.600">
      <Box
        w="220px"
        borderLeftRadius="8"
        background={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        bgColor="red.200"
      />
      <VStack spacing="4" flex="1" align="flex-start" p="3">
        <Box>
          <Heading as="h3" fontSize="3xl" color="white">
            {name}
            <CharacterStatus status={status} />
          </Heading>
          <Text color="white">Alive - Mythological Creature</Text>
        </Box>
        <Box>
          <Text color="gray.400">Last known location:</Text>
          <Text color="white">Mr. Goldenfold's dream</Text>
        </Box>
        <Box>
          <Text color="gray.400">First seen in:</Text>
          <Text color="white">Lawnmower Dog</Text>
        </Box>
      </VStack>
    </Flex>
  );
}

export default CharacterCard;
