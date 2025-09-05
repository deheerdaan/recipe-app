import { Box, Text } from "@chakra-ui/react";

export const RecipeNutrientCard = ({ value, label, colorScheme }) => {
  return (
    <Box textAlign="center" p={3} bg={`${colorScheme}.50`} borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold" color={`${colorScheme}.600`}>
        {value}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {label}
      </Text>
    </Box>
  );
};
