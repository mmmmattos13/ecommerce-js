
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <MainRoutes />
      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
