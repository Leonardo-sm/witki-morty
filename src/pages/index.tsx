import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  Categories,
  useSelectedCategories,
} from '../hooks/query/useSelectedCategories';
import { useMemo, useState } from 'react';

import ButtonMenu from '../components/Layout/ButtonMenu';
import CharacterCard from '../components/UI/Cards/CharacterCard';
import CharactersList from '../components/Layout/CardLists/CharactersList';
import type { NextPage } from 'next';
import SearchBar from '../components/UI/SearchBar';
import api from '../services/api';
import { useCharacters } from '../hooks/query/useCharacters';

type Teste = {
  name: string;
};

const Home: NextPage = () => {
  const [activeButton, setActiveButton] = useState(0);

  const { data } = useSelectedCategories(activeButton);
  console.log(data);

  return (
    <Box>
      <Flex direction="column" align="center" py="16" bgColor="white">
        <Heading as="h1" fontSize="8xl">
          Wiki Morty
        </Heading>
        <Input
          w="3xl"
          my="8"
          py="6"
          borderRadius="full"
          placeholder="Search here..."
        />
      </Flex>
      <Flex justify="center" mt="-6">
        <ButtonMenu
          activeButton={activeButton}
          setActiveButton={(id) => setActiveButton(id)}
        />
      </Flex>
      <SimpleGrid minChildWidth="550px" spacing="4" justifyItems="center" p="4">
        {/* <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard /> */}
        <CharactersList characters={data} />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
