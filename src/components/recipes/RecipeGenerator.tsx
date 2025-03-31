// import { useEffect, useRef, useState } from 'react'
// import IngredientsPanel from './IngredientsPanel'
// import RecipesPanel from './RecipesPanel'
// import { generateRecipesAPI } from '@/api/recipeApi'
// import { recipeIngredients } from '@/data/recipeIngredients'
//
// export interface Recipe {
//   id: string
//   title: string
//   content: {
//     ingredients: string[]
//     instructions: string
//   }
// }
//
// export default function RecipeGenerator() {
//   const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])
//   const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
//   const [selectedProteins, setSelectedProteins] = useState<string[]>([])
//   const [recipes, setRecipes] = useState<Recipe[]>([])
//   const [loading, setLoading] = useState(false)
//   const [servings, setServings] = useState<number>(4)
//   const [mobileTab, setMobileTab] = useState<'ingredients' | 'recipes'>(
//     'ingredients',
//   )
//   const [cuisine, setCuisine] = useState<string>('')
//   const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null)
//
//   const recipesRef = useRef<HTMLDivElement>(null)
//
//   useEffect(() => {
//     const savedRecipes = localStorage.getItem('recipes')
//     if (savedRecipes && savedRecipes !== 'undefined') {
//       try {
//         setRecipes(JSON.parse(savedRecipes))
//       } catch (error) {
//         console.error('Error parsing saved recipes:', error)
//       }
//     }
//     const savedSelectedRecipe = localStorage.getItem('selectedRecipe')
//     if (savedSelectedRecipe && savedSelectedRecipe !== 'undefined') {
//       try {
//         setSelectedRecipe(JSON.parse(savedSelectedRecipe))
//       } catch (error) {
//         console.error('Error parsing selected recipe:', error)
//       }
//     }
//   }, [])
//
//   useEffect(() => {
//     // Spara recept vid ändring
//     localStorage.setItem('recipes', JSON.stringify(recipes))
//   }, [recipes])
//
//   useEffect(() => {
//     // Spara valt recept
//     localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe))
//   }, [selectedRecipe])
//
//   const handleGenerateRecipes = async () => {
//     const payload = {
//       allergens: selectedAllergens,
//       ingredients: selectedIngredients,
//       proteins: selectedProteins,
//       servings,
//       cuisine,
//     }
//     if (window.innerWidth < 768) {
//       setMobileTab('recipes')
//     } else {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//     }
//
//     setLoading(true)
//     try {
//       const data = await generateRecipesAPI(payload)
//
//       if (data.recipes) {
//         setRecipes(data.recipes)
//         setSelectedRecipe(null)
//       } else if (data.error) {
//         setRecipes([
//           {
//             id: 'error',
//             title: 'Error',
//             content: {
//               ingredients: [],
//               instructions: data.error,
//             },
//           },
//         ])
//       } else {
//         setRecipes([
//           {
//             id: 'unknown',
//             title: 'Okänt fel',
//             content: {
//               ingredients: [],
//               instructions: 'Unexpected server response.',
//             },
//           },
//         ])
//       }
//     } catch (error: any) {
//       console.error(error)
//       setRecipes([
//         {
//           id: 'exception',
//           title: 'Fel',
//           content: {
//             ingredients: [],
//             instructions: error.message || 'API error.',
//           },
//         },
//       ])
//     }
//     setLoading(false)
//   }
//
//   const deselectAll = () => {
//     setSelectedAllergens([])
//     setSelectedIngredients([])
//     setSelectedProteins([])
//   }
//
//   return (
//     <div className="min-h-screen p-4">
//       <div className="mb-4 text-gray-700 text-sm">
//         Välj ingredienser, allergier och matkultur (valfritt). Ange antal
//         personer och klicka "Generera Recept".
//       </div>
//       {/* Mobile tab controls */}
//       <div className="flex md:hidden gap-2 mb-4">
//         <button
//           onClick={() => setMobileTab('recipes')}
//           className={`flex-1 py-2 rounded ${mobileTab === 'recipes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
//         >
//           Recept
//         </button>
//         <button
//           onClick={() => setMobileTab('ingredients')}
//           className={`flex-1 py-2 rounded ${mobileTab === 'ingredients' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
//         >
//           Ingredienser
//         </button>
//       </div>
//       <div className="md:flex md:gap-4">
//         <div
//           className={`md:w-1/2 ${mobileTab === 'recipes' ? 'block' : 'hidden'} md:block`}
//         >
//           <RecipesPanel
//             recipes={recipes}
//             loading={loading}
//             ref={recipesRef}
//             selectedRecipe={selectedRecipe}
//             onSelectRecipe={setSelectedRecipe}
//           />
//         </div>
//         <div
//           className={`md:w-1/2 ${mobileTab === 'ingredients' ? 'block' : 'hidden'} md:block`}
//         >
//           <IngredientsPanel
//             selectedAllergens={selectedAllergens}
//             setSelectedAllergens={setSelectedAllergens}
//             selectedIngredients={selectedIngredients}
//             setSelectedIngredients={setSelectedIngredients}
//             selectedProteins={selectedProteins}
//             setSelectedProteins={setSelectedProteins}
//             servings={servings}
//             setServings={setServings}
//             cuisine={cuisine}
//             setCuisine={setCuisine}
//             recipeIngredients={recipeIngredients}
//             deselectAll={deselectAll}
//             onGenerateRecipes={handleGenerateRecipes}
//             loading={loading}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
