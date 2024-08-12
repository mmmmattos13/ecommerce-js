import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Icon, Stack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:3333/carrinho');
                
                if (response.data && response.data.CartItems) {
                    setItems(response.data.CartItems);
                } else {
                    setError('Nenhum produto cadastrado.');
                }
            } catch (error) {
                setError('Erro ao carregar os itens do carrinho.');
                console.error('Erro ao buscar itens do carrinho:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    if (loading) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Spinner size="xl" />
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Alert status="error">
                    <AlertIcon />
                    {error}
                </Alert>
            </Flex>
        );
    }

    return (
        <Box p={5}>
            <Flex direction="column" align="center">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <Box key={index} width="100%" maxWidth="500px" mb={4}>
                            <Flex
                                direction="column"
                                border="1px solid #e2e8f0"
                                borderRadius="md"
                                overflow="hidden"
                                boxShadow="md"
                            >
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    p={4}
                                    bg="gray.50"
                                    borderBottom="1px solid #e2e8f0"
                                >
                                    <Flex align="center">
                                        <Icon as={FaShoppingCart} boxSize="50px" color="teal.500" />
                                        <Box ml={4}>
                                            <Text fontSize="lg" fontWeight="bold">{item.productName}</Text>
                                            <Flex mt={2} align="center">
                                                <Text fontSize="lg">Quantidade: {item.quantity}</Text>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Flex>

                                <Stack spacing={3} p={4} bg="white">
                                    <Flex justify="space-between">
                                        <Text fontSize="lg" fontWeight="semibold">Sub-total</Text>
                                        <Text fontSize="lg" fontWeight="semibold">R$ {(item.price * item.quantity).toFixed(2)}</Text>
                                    </Flex>
                                </Stack>
                            </Flex>
                        </Box>
                    ))
                ) : (
                    <Text fontSize="lg" fontWeight="bold">Seu carrinho está vazio.</Text>
                )}
            </Flex>
        </Box>
    );
};

export default Cart;
