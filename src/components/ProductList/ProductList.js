import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa o Axios
import { SimpleGrid, Box, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3333/produtos');
        setProducts(response.data);

        if (response.data.length === 0) {
          setError('Nenhum produto cadastrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error.response || error.message);
        setError('Erro ao buscar produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  if (loading) {
    return (
      <Box p="5" textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p="5">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box p="5">
      <SimpleGrid columns={[1, null, 3]} spacing="5">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
