import { Box, Heading, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const RecipeIngredients = ({ ingredientLines }) => {
  return (
    <Box w="full" bg="white" p={6} borderRadius="lg" shadow="md">
      <Heading size="md" mb={4} color="gray.800">
        Ingredients
      </Heading>
      {ingredientLines && ingredientLines.length > 0 ? (
        <List spacing={2}>
          {ingredientLines.map((ingredient, index) => (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {ingredient}
            </ListItem>
          ))}
        </List>
      ) : (
        <Text color="gray.600">No ingredients available</Text>
      )}
    </Box>
  );
};
