import React from 'react';
import { Box, Flex, Text, Button, Icon, Stack } from "@chakra-ui/react";

const CustomButton = () => {
    return (
        <Stack spacing={3} p={4} bg="white">    

            <Flex justify="flex-end" mt={4} gap={4}>
                <Button colorScheme="green" width="min-content" size="lg">
                    Pagar
                </Button>
                <Button colorScheme="red" width="min-content" size="lg">
                    Remover
                </Button>
            </Flex>
        </Stack>
    )
}

export default CustomButton;
