import React, { useState } from 'react';
import { Box, Flex, Text, Button, Icon, Stack } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({ item, price }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const subtotal = price * quantity;
    const total = subtotal;

    return (
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
                        <Text fontSize="lg" fontWeight="bold">{item}</Text>
                        <Flex mt={2} align="center">
                            <Button onClick={decreaseQuantity} size="sm" mr={2} colorScheme="teal">-</Button>
                            <Text fontSize="lg">{quantity}</Text>
                            <Button onClick={increaseQuantity} size="sm" ml={2} colorScheme="teal">+</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

            <Stack spacing={3} p={4} bg="white">
                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">Sub-total</Text>
                    <Text fontSize="lg" fontWeight="semibold">R$ {subtotal.toFixed(2)}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">Total</Text>
                    <Text fontSize="lg" fontWeight="semibold">R$ {total.toFixed(2)}</Text>
                </Flex>
            </Stack>
        </Flex>
    );
}

export default Cart;
