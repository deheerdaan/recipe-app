import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return <RecipePage recipe={selectedRecipe} onBack={handleBackToList} />;
  }

  return <RecipeListPage onRecipeSelect={handleRecipeSelect} />;
};
