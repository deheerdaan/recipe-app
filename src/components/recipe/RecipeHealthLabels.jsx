import { Box, Heading } from "@chakra-ui/react";
import { BadgeGroup } from "../ui/BadgeGroup";

export const RecipeHealthLabels = ({ healthLabels }) => {
  if (!healthLabels || healthLabels.length === 0) {
    return null;
  }

  return (
    <Box w="full" bg="white" p={6} borderRadius="lg" shadow="md">
      <Heading size="md" mb={4} color="gray.800">
        All Health Labels
      </Heading>
      <BadgeGroup
        labels={healthLabels}
        colorScheme="green"
        variant="subtle"
        badgeProps={{ p: 2 }}
      />
    </Box>
  );
};
