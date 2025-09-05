import { Grid, GridItem } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { RecipeInfoCard } from "./RecipeInfoCard";
import { formatTime } from "../../utils/recipeUtils";

export const RecipeOverview = ({ recipe }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
      gap={6}
      w="full"
    >
      <GridItem>
        <RecipeInfoCard
          title="Meal Type"
          value={recipe.mealType?.join(", ") || "Not specified"}
        />
      </GridItem>

      <GridItem>
        <RecipeInfoCard
          title="Dish Type"
          value={recipe.dishType || "Not specified"}
        />
      </GridItem>

      <GridItem>
        <RecipeInfoCard
          title="Cooking Time"
          value={formatTime(recipe.totalTime)}
          icon={<TimeIcon color="blue.500" />}
        />
      </GridItem>

      <GridItem>
        <RecipeInfoCard
          title="Servings"
          value={recipe.yield || "Not specified"}
        />
      </GridItem>
    </Grid>
  );
};
