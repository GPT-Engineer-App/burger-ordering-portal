import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const burgers = [
  { name: "Ahi Tuna Burger", price: 12.99 },
  { name: "Aussie Burger", price: 10.99 },
  { name: "Avocado Burger", price: 11.99 },
  { name: "Bánh Mì Burger", price: 13.99 },
  { name: "Beyond Burger", price: 14.99 },
  { name: "Big Mac Burger", price: 9.99 },
  { name: "Bison Burger", price: 15.99 },
  { name: "Black Bean Burgers", price: 10.99 },
  { name: "Blue Cheese Burger", price: 12.99 },
  { name: "Bratwurst Burger", price: 11.99 },
  { name: "Breakfast Burger", price: 10.99 },
  { name: "Burger King Whopper", price: 8.99 },
  { name: "Carl's Jr. Western Bacon Burger", price: 11.99 },
  { name: "Chicken Burger", price: 9.99 },
  { name: "Chili Burger", price: 12.99 },
  { name: "Classic Cheeseburger", price: 9.99 },
  { name: "Chorizo Burger", price: 13.99 },
  { name: "Cuban Burger", price: 12.99 },
  { name: "Donut Burger", price: 14.99 },
  { name: "Elk Burgers", price: 16.99 },
  { name: "Falafel Burger", price: 10.99 },
  { name: "FleurBurger 5000", price: 5000 },
  { name: "Gourmet Burgers", price: 18.99 },
  { name: "Halal Burger", price: 11.99 },
  { name: "Hatch Green Chile Burger", price: 13.99 },
  { name: "Impossible Burger", price: 15.99 },
  { name: "Indian-Spiced Burger", price: 12.99 },
  { name: "In-N-Out Double-Double", price: 8.99 },
  { name: "Jucy Lucy", price: 11.99 },
  { name: "Juicy Griddle", price: 10.99 },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (burger) => {
    setCart([...cart, burger]);
    toast({
      title: "Added to cart",
      description: `${burger.name} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="2xl">
          Burger Bonanza
        </Heading>
        <Button leftIcon={<FaShoppingCart />}>Cart ({cart.length})</Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
        {burgers.map((burger, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src={`https://source.unsplash.com/600x400/?${burger.name}`} alt={burger.name} objectFit="cover" h={200} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={2}>
                {burger.name}
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                ${burger.price.toFixed(2)}
              </Text>
              <Button colorScheme="pink" size="lg" onClick={() => addToCart(burger)}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
