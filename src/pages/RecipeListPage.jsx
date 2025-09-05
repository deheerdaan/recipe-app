import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/recipe/RecipeCard";
import { SearchBar } from "../components/SearchBar";
export const RecipeListPage = ({ onRecipeSelect }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipeData = () => {
      const recipes = data.hits.map(({ recipe }) => recipe);
      setRecipes(recipes);
    };
    fetchRecipeData();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const searchLower = searchTerm.toLowerCase();

    const nameMatch = recipe.label.toLowerCase().includes(searchLower);

    const healthLabelMatch = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchLower)
    );

    return nameMatch || healthLabelMatch;
  });

  return (
    <Box bg="blue.50" h="100vh" display="flex" flexDirection="column">
      <Box py={{ base: 2, md: 4 }} px={{ base: 4, md: 0 }} flexShrink={0}>
        <Center flexDir="column" w="full">
          <Heading
            mb={{ base: 2, md: 4 }}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            Winc Recipe Checker
          </Heading>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </Center>
      </Box>

      <Box flex={1} overflowY="auto" pb={8}>
        <Center>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={{ base: 4, md: 6 }}
            p={{ base: 4, md: 6 }}
            maxW="1200px"
            w="full"
          >
            {filteredRecipes.map((recipe) => (
              <GridItem key={recipe.label}>
                <RecipeCard recipe={recipe} onSelect={onRecipeSelect} />
              </GridItem>
            ))}
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};
