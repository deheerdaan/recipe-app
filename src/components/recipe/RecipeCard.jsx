import { Image, Card, CardBody, VStack, Text } from "@chakra-ui/react";
import { RecipeLabels } from "./RecipeLabels";

export const RecipeCard = ({ recipe, onSelect }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(recipe);
    }
  };

  return (
    <Card
      height="400px"
      borderRadius="8px"
      cursor="pointer"
      onClick={handleClick}
      _hover={{ boxShadow: "lg" }}
      bg={"white"}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        height="133px"
        objectFit="cover"
        borderTopRadius="8px"
      />
      <CardBody
        p="6"
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <VStack alignItems="center" spacing="2">
          <Text
            fontSize={"small"}
            textTransform={"uppercase"}
            textAlign="center"
          >
            {recipe.mealType.join(", ")}
          </Text>
          <Text fontWeight={"bold"} fontSize={"large"} textAlign="center">
            {recipe.label}
          </Text>
          <RecipeLabels
            healthLabels={recipe.healthLabels}
            dietLabels={recipe.dietLabels}
            cautions={recipe.cautions}
            dishType={recipe.dishType}
          />
        </VStack>
      </CardBody>
    </Card>
  );
};
