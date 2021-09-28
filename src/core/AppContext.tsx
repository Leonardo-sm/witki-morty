import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import theme from '../styles';

type AppContextProps = PropsWithChildren<{}>;

const queryClient = new QueryClient();

function AppContext({ children }: AppContextProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}

export default AppContext;
