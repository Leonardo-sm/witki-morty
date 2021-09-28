import { Button, ButtonGroup } from '@chakra-ui/react';

type ButtonMenuProps = {
  activeButton: number;
  setActiveButton: (id: number) => void;
};

const activeButtonStyle = {
  bgGradient: 'linear(to-tl, pink.500, red.500)',
  color: 'gray.200',
};

function ButtonMenu({ activeButton, setActiveButton }: ButtonMenuProps) {
  function handleButtonActive(id: number) {
    setActiveButton(id);
  }

  return (
    <ButtonGroup isAttached size="lg">
      <Button
        borderLeftRadius="full"
        borderRightRadius="0"
        transition="ease 0.2s"
        _hover={{
          filter: 'brightness(90%)',
        }}
        onClick={() => handleButtonActive(0)}
        {...(activeButton === 0 ? { ...activeButtonStyle } : null)}
      >
        Characters
      </Button>
      <Button
        transition="ease 0.2s"
        _hover={{
          filter: 'brightness(90%)',
        }}
        onClick={() => handleButtonActive(1)}
        {...(activeButton === 1 ? { ...activeButtonStyle } : null)}
      >
        Locations
      </Button>
      <Button
        borderLeftRadius="0"
        borderRightRadius="full"
        transition="ease 0.2s"
        _hover={{
          filter: 'brightness(90%)',
        }}
        onClick={() => handleButtonActive(2)}
        {...(activeButton === 2 ? { ...activeButtonStyle } : null)}
      >
        Episodes
      </Button>
    </ButtonGroup>
  );
}

export default ButtonMenu;
