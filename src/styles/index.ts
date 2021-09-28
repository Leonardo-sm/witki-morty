import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Roboto, sans-serif',
        bgColor: 'gray.800',
      },
    },
  },
});

export default theme;
