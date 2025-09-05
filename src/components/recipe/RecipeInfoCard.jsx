import { Box, Text, HStack, VStack } from "@chakra-ui/react";

export const RecipeInfoCard = ({ title, value, icon }) => {
  return (
    <Box bg="white" p={4} borderRadius="lg" shadow="md">
      {icon ? (
        <HStack>
          {icon}
          <VStack align="start" spacing={0}>
            <Text fontSize="sm" color="gray.600">
              {title}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {value}
            </Text>
          </VStack>
        </HStack>
      ) : (
        <>
          <Text fontSize="sm" color="gray.600" mb={1}>
            {title}
          </Text>
          <Text fontSize="lg" fontWeight="bold" textTransform="capitalize">
            {value}
          </Text>
        </>
      )}
    </Box>
  );
};
