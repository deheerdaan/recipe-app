import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { RecipeNutrientCard } from "./RecipeNutrientCard";
import { formatNutrient, extractMainNutrients } from "../../utils/recipeUtils";

export const RecipeNutrition = ({ totalNutrients }) => {
  const mainNutrients = extractMainNutrients(totalNutrients);

  return (
    <Box w="full" bg="white" p={6} borderRadius="lg" shadow="md">
      <Heading size="md" mb={4} color="gray.800">
        Nutritional Information
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
        <RecipeNutrientCard
          value={formatNutrient(mainNutrients.energy)}
          label="Energy"
          colorScheme="blue"
        />

        <RecipeNutrientCard
          value={formatNutrient(mainNutrients.protein)}
          label="Protein"
          colorScheme="green"
        />

        <RecipeNutrientCard
          value={formatNutrient(mainNutrients.fat)}
          label="Fat"
          colorScheme="yellow"
        />

        <RecipeNutrientCard
          value={formatNutrient(mainNutrients.carbs)}
          label="Carbs"
          colorScheme="orange"
        />

        <RecipeNutrientCard
          value={formatNutrient(mainNutrients.cholesterol)}
          label="Cholesterol"
          colorScheme="red"
        />

        <RecipeNutrientCard
          value={formatNutrient(mainNutrients.sodium)}
          label="Sodium"
          colorScheme="purple"
        />
      </SimpleGrid>
    </Box>
  );
};
