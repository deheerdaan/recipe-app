import { Box, Heading, Grid, GridItem, HStack } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { BadgeGroup } from "../ui/BadgeGroup";

export const RecipeCautionsAndDietLabels = ({ cautions, dietLabels }) => {
  const hasCautions = cautions && cautions.length > 0;
  const hasDietLabels = dietLabels && dietLabels.length > 0;

  if (!hasCautions && !hasDietLabels) {
    return null;
  }

  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap={6}
      w="full"
    >
      {hasCautions && (
        <GridItem>
          <Box bg="white" p={6} borderRadius="lg" shadow="md" h="full">
            <HStack mb={4}>
              <WarningIcon color="red.500" />
              <Heading size="md" color="gray.800">
                Cautions
              </Heading>
            </HStack>
            <BadgeGroup
              labels={cautions}
              colorScheme="red"
              variant="solid"
              badgeProps={{ p: 2 }}
            />
          </Box>
        </GridItem>
      )}

      {hasDietLabels && (
        <GridItem>
          <Box bg="white" p={6} borderRadius="lg" shadow="md" h="full">
            <Heading size="md" mb={4} color="gray.800">
              Diet Labels
            </Heading>
            <BadgeGroup
              labels={dietLabels}
              colorScheme="green"
              variant="solid"
              badgeProps={{ p: 2 }}
            />
          </Box>
        </GridItem>
      )}
    </Grid>
  );
};
