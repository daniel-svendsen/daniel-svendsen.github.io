// interface GenerateRecipesParams {
//   allergens: string[]
//   ingredients: string[]
//   servings: number
//   cuisine: string
//   proteins: string[]
// }
//
// export const generateRecipesAPI = async ({
//   allergens,
//   ingredients,
//   servings,
//   cuisine,
//   proteins,
// }: GenerateRecipesParams) => {
//   const API_URL = import.meta.env.VITE_API_URL
//   const response = await fetch(`${API_URL}/generate-recipes`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       allergens,
//       ingredients,
//       servings,
//       cuisine,
//       proteins,
//     }),
//   })
//   return response.json()
// }
