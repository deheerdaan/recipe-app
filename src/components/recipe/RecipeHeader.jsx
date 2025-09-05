import { Button, Heading, Image, VStack, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const RecipeHeader = ({ recipe, onBack }) => {
  return (
    <>
      <HStack w="full" align="center">
        <Button onClick={onBack} colorScheme="black" variant="ghost" size="lg">
          <ChevronLeftIcon />
        </Button>

        <Heading size="2xl" textAlign="center" color="gray.800" flex="1">
          {recipe.label}
        </Heading>
      </HStack>

      <VStack spacing={4} w="full">
        <Image
          src={recipe.image}
          alt={recipe.label}
          maxH="500px"
          w="full"
          objectFit="cover"
          borderRadius="lg"
          shadow="lg"
        />
      </VStack>
    </>
  );
};
