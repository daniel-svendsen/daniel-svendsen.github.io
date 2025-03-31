// interface IngredientItem {
//   name: string
//   allergens: string[]
//   alternative?: IngredientItem
// }
//
// export const triggersAllergy = (
//   selectedAllergens: string[],
//   allergens: string[],
// ): boolean => allergens.some((allergen) => selectedAllergens.includes(allergen))
//
// export const getDisplayableItems = (
//   items: IngredientItem[],
//   selectedAllergens: string[],
// ): IngredientItem[] => {
//   const results: IngredientItem[] = []
//   for (const item of items) {
//     if (!triggersAllergy(selectedAllergens, item.allergens)) {
//       results.push(item)
//     } else if (
//       item.alternative &&
//       !triggersAllergy(selectedAllergens, item.alternative.allergens)
//     ) {
//       results.push(item.alternative)
//     }
//   }
//   return results
// }
