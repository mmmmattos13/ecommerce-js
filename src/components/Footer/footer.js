import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" className="footer" p="4" textAlign="center"  bg="gray.100" mt="4">
      <Text>&copy; Ecommerce Bragança Paulista</Text>
      <Text>Comprometidos com o consumidor</Text>
    </Box>
  );
};

export default Footer;
