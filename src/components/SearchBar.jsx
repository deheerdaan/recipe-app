import { Input, Box } from "@chakra-ui/react";

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <Box mb={6} w={{ base: "90%", md: "600px" }} minW="auto">
      <Input
        placeholder="Search recipes"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        size="lg"
        borderRadius="md"
        bg="white"
        borderColor="gray.300"
        w="full"
        _focus={{
          borderColor: "blue.500",
        }}
      />
    </Box>
  );
};
