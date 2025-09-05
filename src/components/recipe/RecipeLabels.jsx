import { Text } from "@chakra-ui/react";
import { BadgeGroup } from "../ui/BadgeGroup";

export const RecipeLabels = ({
  healthLabels,
  dietLabels,
  cautions,
  dishType,
}) => {
  const filteredHealthLabels = healthLabels?.filter(
    (label) => label === "Vegan" || label === "Vegetarian"
  );

  return (
    <>
      <BadgeGroup
        labels={filteredHealthLabels}
        colorScheme="purple"
        justifyContent="center"
      />
      <BadgeGroup
        labels={dietLabels}
        colorScheme="green"
        justifyContent="center"
      />
      <Text>
        Dish:{" "}
        <Text as="span" fontWeight="semibold">
          {dishType}
        </Text>
      </Text>
      <BadgeGroup
        labels={cautions}
        colorScheme="red"
        title="Cautions"
        showTitle={true}
        justifyContent="center"
      />
    </>
  );
};
