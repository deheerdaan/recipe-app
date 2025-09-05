import { Box, Center, VStack } from "@chakra-ui/react";
import { RecipeHeader } from "../components/recipe/RecipeHeader";
import { RecipeOverview } from "../components/recipe/RecipeOverview";
import { RecipeHealthLabels } from "../components/recipe/RecipeHealthLabels";
import { RecipeCautionsAndDietLabels } from "../components/recipe/RecipeCautionsAndDietLabels";
import { RecipeIngredients } from "../components/recipe/RecipeIngredients";
import { RecipeNutrition } from "../components/recipe/RecipeNutrition";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Box minH="100vh" p={6} bg="blue.50">
      <Center>
        <VStack spacing={8} maxW="1000px" w="full">
          <RecipeHeader recipe={recipe} onBack={onBack} />

          <RecipeOverview recipe={recipe} />

          <RecipeHealthLabels healthLabels={recipe.healthLabels} />

          <RecipeCautionsAndDietLabels
            cautions={recipe.cautions}
            dietLabels={recipe.dietLabels}
          />

          <RecipeIngredients ingredientLines={recipe.ingredientLines} />

          <RecipeNutrition totalNutrients={recipe.totalNutrients} />
        </VStack>
      </Center>
    </Box>
  );
};
