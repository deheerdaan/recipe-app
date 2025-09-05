import { HStack, Badge, Text } from "@chakra-ui/react";

export const BadgeGroup = ({
  labels,
  colorScheme,
  title,
  showTitle = false,
  variant = "subtle",
  badgeProps = {},
  justifyContent = "flex-start",
}) => {
  if (!labels || labels.length === 0) {
    return null;
  }

  return (
    <>
      {showTitle && title && <Text>{title}:</Text>}
      <HStack spacing="1" wrap="wrap" justifyContent={justifyContent} gap="1">
        {labels.map((label, index) => (
          <Badge
            key={index}
            colorScheme={colorScheme}
            variant={variant}
            fontSize="xs"
            {...badgeProps}
          >
            {label}
          </Badge>
        ))}
      </HStack>
    </>
  );
};
