import React from 'react';
import { Box, Image, Button, useToast } from '@chakra-ui/react';
import axios from 'axios';

const ProductCard = ({ product, onDelete }) => {
  const toast = useToast(); // Inicializa o Toast
  

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3333/produtos/${product.id}`);
      onDelete(product.id); // Chama a função de callback após a exclusão

      // Exibe o Toast de sucesso
      toast({
        title: "Produto deletado.",
        description: "O produto foi deletado com sucesso.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Erro ao deletar produto:', error.response || error.message);

      // Exibe o Toast de erro
      toast({
        title: "Erro ao deletar produto.",
        description: "Não foi possível deletar o produto. Tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleAddToCart = async () => {
    try {
      const cartItem = {        
        quantity: 1, 
        price: product.price,        
      };

      await axios.post('http://localhost:3333/carrinho', cartItem);

      // Exibe o Toast de sucesso
      toast({
        title: "Produto adicionado ao carrinho.",
        description: `O produto ${product.productName} foi adicionado ao carrinho com sucesso.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error.response || error.message);

      // Exibe o Toast de erro
      toast({
        title: "Erro ao adicionar ao carrinho.",
        description: "Não foi possível adicionar o produto ao carrinho. Tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Image src={product.imageUrl} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
  

      <Box p="6">     

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.productName}
        </Box>

        <Box>
          {product.price} {product.currency}
          <Box as="span" color="gray.600" fontSize="sm">
            / unidade
          </Box>
        </Box>

        <Button mt="4"  colorScheme="teal" onClick={handleAddToCart}>
          Comprar
        </Button>
        
        <Button mt="4" ml="3" colorScheme="red" onClick={handleDelete}>
          Deletar
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
