export const formatNutrient = (nutrient) => {
  if (!nutrient) return "N/A";
  return `${Math.round(nutrient.quantity)} ${nutrient.unit}`;
};

export const formatTime = (time) => {
  if (!time || time === 0) return "Not specified";
  if (time < 60) return `${time} minutes`;
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return minutes === 0
    ? `${hours} hour${hours > 1 ? "s" : ""}`
    : `${hours}h ${minutes}m`;
};

export const extractMainNutrients = (totalNutrients) => {
  if (!totalNutrients) return {};
  
  return {
    energy: totalNutrients.ENERC_KCAL,
    protein: totalNutrients.PROCNT,
    fat: totalNutrients.FAT,
    carbs: totalNutrients.CHOCDF,
    cholesterol: totalNutrients.CHOLE,
    sodium: totalNutrients.NA,
  };
};
