import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Alert, AlertIcon } from '@chakra-ui/react';
import axios from 'axios';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const AddProduct = () => {
  // Estados para os valores do formulário
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('BRL');
  const [isInStock, setIsInStock] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        productName: name,
        price: parseFloat(price),
        currency: currency,
        isInStock: isInStock === 'true',
        imageUrl: imageUrl, // Adicionando a URL da imagem ao objeto do produto
      };

      const response = await axios.post("http://localhost:3333/produtos", newProduct);

      if (response.status === 201) {
        alert('Produto adicionado com sucesso!');
        // Limpa os campos do formulário
        setName('');
        setPrice('');
        setCurrency('BRL');
        setIsInStock(true);
        setImageUrl('');
      } else {
        setError('Erro ao adicionar produto.');
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      setError('Erro ao adicionar produto. Tente novamente mais tarde.');
    }
  };

  return (
    <>
      <Header />
      <Box p="5">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Nome do Produto</FormLabel>
            <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel>Preço</FormLabel>
            <Input name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel>Moeda</FormLabel>
            <Select name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select name="isInStock" value={isInStock} onChange={(e) => setIsInStock(e.target.value)}>
              <option value="true">Em estoque</option>
              <option value="false">Fora de estoque</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>URL da Imagem</FormLabel>
            <Input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </FormControl>

          {error && <Alert status="error"><AlertIcon />{error}</Alert>}

          <Button colorScheme="teal" onClick={handleAddProduct}>Adicionar Produto</Button>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default AddProduct;
