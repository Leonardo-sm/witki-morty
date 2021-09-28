import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={AiOutlineSearch} />}
      />
      <Input
        w="3xl"
        my="8"
        py="6"
        borderRadius="full"
        placeholder="Search here..."
      />
    </InputGroup>
  );
}

export default SearchBar;
