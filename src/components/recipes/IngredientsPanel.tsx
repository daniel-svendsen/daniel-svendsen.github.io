// import { ChangeEvent } from 'react'
// import { Button } from '@headlessui/react'
// import Checkbox from '@/components/Checkbox'
// import { getDisplayableItems } from '@/utils/recipeUtils'
//
// interface IngredientItem {
//   name: string
//   allergens: string[]
//   alternative?: {
//     name: string
//     allergens: string[]
//   }
// }
//
// interface IngredientsPanelProps {
//   selectedAllergens: string[]
//   setSelectedAllergens: React.Dispatch<React.SetStateAction<string[]>>
//   selectedIngredients: string[]
//   setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>
//   selectedProteins: string[]
//   setSelectedProteins: React.Dispatch<React.SetStateAction<string[]>>
//   servings: number
//   setServings: React.Dispatch<React.SetStateAction<number>>
//   cuisine: string
//   setCuisine: React.Dispatch<React.SetStateAction<string>>
//   recipeIngredients: Record<string, IngredientItem[]>
//   deselectAll: () => void
//   onGenerateRecipes: () => void
//   loading: boolean
// }
//
// const allergenOptions = [
//   'Nötter',
//   'Gluten',
//   'Laktos',
//   'Ägg',
//   'Fisk',
//   'Skaldjur',
//   'Selleri',
//   'Senap',
// ]
//
// const IngredientsPanel = ({
//   selectedAllergens,
//   setSelectedAllergens,
//   selectedIngredients,
//   setSelectedIngredients,
//   selectedProteins,
//   setSelectedProteins,
//   servings,
//   setServings,
//   cuisine,
//   setCuisine,
//   recipeIngredients,
//   deselectAll,
//   onGenerateRecipes,
//   loading,
// }: IngredientsPanelProps) => {
//   const toggleAllergen = (allergen: string) => {
//     setSelectedAllergens((prev) =>
//       prev.includes(allergen)
//         ? prev.filter((a) => a !== allergen)
//         : [...prev, allergen],
//     )
//   }
//
//   const toggleIngredient = (ingredientName: string) => {
//     setSelectedIngredients((prev) =>
//       prev.includes(ingredientName)
//         ? prev.filter((i) => i !== ingredientName)
//         : [...prev, ingredientName],
//     )
//   }
//
//   const toggleProtein = (protein: string) => {
//     setSelectedProteins((prev) =>
//       prev.includes(protein)
//         ? prev.filter((p) => p !== protein)
//         : [...prev, protein],
//     )
//   }
//
//   const handleServingsChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setServings(Number(e.target.value))
//   }
//
//   const handleCuisineChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     setCuisine(e.target.value)
//   }
//
//   const basicIngredients = [
//     'Salt',
//     'Peppar',
//     'Olivolja',
//     'Mjöl',
//     'Mjölk',
//     'Smör',
//     'Socker',
//     'Vatten',
//     'Ägg',
//     'Vitlök',
//     'Oregano',
//     'Paprikapulver',
//     'Curry',
//     'Tacokrydda',
//     'Kycklingbuljong',
//     'Grönsaksbuljong',
//     'Oxbuljong',
//     'Köttbuljong',
//     'Tomat',
//     'Lök',
//     'Morot',
//     'Broccoli',
//     'Blomkål',
//     'Majs',
//     'Vitlökspulver',
//     'Kanel',
//     'Basilika',
//     'Timjan',
//     'Rosmarin',
//     'Ost',
//     'Citron',
//     'Äpple',
//     'Ketchup',
//   ]
//
//   const handleSelectBasic = () => {
//     const filtered = basicIngredients.map((basic) => {
//       let ingredientData: IngredientItem | null = null
//       Object.values(recipeIngredients).forEach((category) => {
//         const found = category.find(
//           (item) => item.name.toLowerCase() === basic.toLowerCase(),
//         )
//         if (found) {
//           ingredientData = found
//         }
//       })
//       if (ingredientData) {
//         const hasConflict = ingredientData.allergens.some((allergen) =>
//           selectedAllergens.includes(allergen),
//         )
//         if (hasConflict && ingredientData.alternative) {
//           const altConflict = ingredientData.alternative.allergens.some(
//             (allergen) => selectedAllergens.includes(allergen),
//           )
//           if (!altConflict) {
//             return ingredientData.alternative.name
//           }
//         }
//         return ingredientData.name
//       }
//       return basic
//     })
//     setSelectedIngredients(filtered)
//   }
//
//   return (
//     <div className="rounded-lg border bg-white p-4 shadow">
//       <div className="mb-4">
//         <h2 className="text-lg font-bold">Välj ingredienser</h2>
//       </div>
//
//       <div className="flex flex-col sm:flex-row sm:justify-end gap-2 mb-4">
//         <Button
//           onClick={deselectAll}
//           className="w-full sm:w-auto px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors"
//         >
//           Avmarkera alla
//         </Button>
//         <Button
//           onClick={handleSelectBasic}
//           className="w-full sm:w-auto px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//         >
//           Jag har basvaror
//         </Button>
//       </div>
//
//       <div className="mb-4">
//         <label htmlFor="servings" className="font-semibold block mb-2">
//           Antal personer
//         </label>
//         <input
//           type="number"
//           id="servings"
//           min={1}
//           value={servings}
//           onChange={handleServingsChange}
//           className="w-full rounded border border-gray-300 p-2"
//         />
//       </div>
//
//       <div className="mb-4">
//         <h3 className="font-semibold">Matkultur (valfritt)</h3>
//         <select
//           value={cuisine}
//           onChange={handleCuisineChange}
//           className="w-full rounded border border-gray-300 p-2"
//         >
//           <option value="">Ingen specifik matkultur</option>
//           <option value="medelhavs">Medelhavs</option>
//           <option value="mellanostern">Mellanöstern</option>
//           <option value="italiensk">Italienskt</option>
//           <option value="fransk">Franskt</option>
//           <option value="nordisk">Nordiskt</option>
//         </select>
//       </div>
//
//       <div className="mb-4">
//         <h3 className="font-semibold">Allergier</h3>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {allergenOptions.map((allergen) => (
//             <Checkbox
//               key={allergen}
//               label={allergen}
//               selected={selectedAllergens.includes(allergen)}
//               onChange={() => toggleAllergen(allergen)}
//             />
//           ))}
//         </div>
//       </div>
//
//       {recipeIngredients.protein && (
//         <div className="mb-4">
//           <h3 className="font-semibold">Proteiner</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
//             {recipeIngredients.protein.map((item) => (
//               <Checkbox
//                 key={item.name}
//                 label={item.name}
//                 selected={selectedProteins.includes(item.name)}
//                 onChange={() => toggleProtein(item.name)}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//
//       {Object.entries(recipeIngredients).map(([catName, catItems]) => {
//         if (catName === 'protein') return null
//         const displayable = getDisplayableItems(catItems, selectedAllergens)
//         return (
//           <div key={catName} className="mb-6">
//             <h3 className="font-semibold capitalize mb-2">{catName}</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//               {displayable.map((item) => (
//                 <Checkbox
//                   key={item.name}
//                   label={item.name}
//                   selected={selectedIngredients.includes(item.name)}
//                   onChange={() => toggleIngredient(item.name)}
//                 />
//               ))}
//             </div>
//           </div>
//         )
//       })}
//
//       <Button
//         onClick={onGenerateRecipes}
//         className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? 'Genererar...' : 'Generera Recept'}
//       </Button>
//     </div>
//   )
// }
//
// export default IngredientsPanel
