import { ChangeEvent } from 'react'
import { Button } from '@headlessui/react'
import Checkbox from '@/components/Checkbox'
import { getDisplayableItems } from '@/utils/recipeUtils'

interface IngredientItem {
  name: string
  allergens: string[]
  alternative?: {
    name: string
    allergens: string[]
  }
}

interface IngredientsPanelProps {
  selectedAllergens: string[]
  setSelectedAllergens: React.Dispatch<React.SetStateAction<string[]>>
  selectedIngredients: string[]
  setSelectedIngredients: React.Dispatch<React.SetStateAction<string[]>>
  servings: number
  setServings: React.Dispatch<React.SetStateAction<number>>
  cuisine: string
  setCuisine: React.Dispatch<React.SetStateAction<string>>
  recipeIngredients: Record<string, IngredientItem[]>
  deselectAll: () => void
  onGenerateRecipes: () => void
  loading: boolean
}

const allergenOptions = [
  'Nötter',
  'Gluten',
  'Laktos',
  'Ägg',
  'Fisk',
  'Skaldjur',
  'Selleri',
  'Senap',
]

const IngredientsPanel = ({
  selectedAllergens,
  setSelectedAllergens,
  selectedIngredients,
  setSelectedIngredients,
  servings,
  setServings,
  cuisine,
  setCuisine,
  recipeIngredients,
  deselectAll,
  onGenerateRecipes,
  loading,
}: IngredientsPanelProps) => {
  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen],
    )
  }

  const toggleIngredient = (ingredientName: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientName)
        ? prev.filter((i) => i !== ingredientName)
        : [...prev, ingredientName],
    )
  }

  const handleServingsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setServings(Number(e.target.value))
  }

  const handleCuisineChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCuisine(e.target.value)
  }

  return (
    <div className="rounded-lg border bg-white p-4 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Välj ingredienser</h2>
        <button
          onClick={deselectAll}
          className="text-xs text-blue-500 underline"
        >
          Avmarkera alla
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="servings" className="font-semibold block mb-2">
          Antal personer
        </label>
        <input
          type="number"
          id="servings"
          min={1}
          value={servings}
          onChange={handleServingsChange}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Allergier</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {allergenOptions.map((allergen) => (
            <Checkbox
              key={allergen}
              label={allergen}
              selected={selectedAllergens.includes(allergen)}
              onChange={() => toggleAllergen(allergen)}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Matkultur (valfritt)</h3>
        <select
          value={cuisine}
          onChange={handleCuisineChange}
          className="w-full rounded border border-gray-300 p-2"
        >
          <option value="">Ingen specifik matkultur</option>
          <option value="medelhavs">Medelhavs</option>
          <option value="mellanostern">Mellanöstern</option>
          <option value="italiensk">Italienskt</option>
          <option value="fransk">Franskt</option>
          <option value="nordisk">Nordiskt</option>
        </select>
      </div>
      {Object.entries(recipeIngredients).map(([catName, catItems]) => {
        const displayable = getDisplayableItems(catItems, selectedAllergens)
        return (
          <div key={catName} className="mb-6">
            <h3 className="font-semibold capitalize mb-2">{catName}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {displayable.map((item) => (
                <Checkbox
                  key={item.name}
                  label={item.name}
                  selected={selectedIngredients.includes(item.name)}
                  onChange={() => toggleIngredient(item.name)}
                />
              ))}
            </div>
          </div>
        )
      })}
      <Button
        onClick={onGenerateRecipes}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Genererar...' : 'Generera Recept'}
      </Button>
    </div>
  )
}

export default IngredientsPanel