import React from 'react';
import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <Box as="header" bg="gray.100" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={4}>
          <Icon as={FaShoppingCart} w={8} h={8} />
          <Heading as="h1" size="lg">Ecommerce Bragança Paulista</Heading>
        </Flex>
        <Flex as="nav" gap={6}>
          <Link href="/" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Produtos</Link>          
          <Link href="/carrinho" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Carrinho</Link>          
          <Link href="/produtos" _hover={{ textDecoration: 'none', color: 'blue.500' }}>Cadastrar Produto</Link>          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
