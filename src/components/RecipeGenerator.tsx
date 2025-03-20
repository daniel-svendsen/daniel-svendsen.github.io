import { useState } from 'react'
import { Button } from '@headlessui/react'
import { recipeIngredients } from '@/data/recipeIngredients'
import Checkbox from '@/components/CheckBox'

export default function RecipeGenerator() {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [recipes, setRecipes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [servings, setServings] = useState<number>(4) // antal personer

  const [mobileTab, setMobileTab] = useState<'ingredients' | 'recipes'>(
    'ingredients',
  )

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

  // Kolla om ingrediens triggar allergi
  const triggersAllergy = (allergens: string[]) =>
    allergens.some((allergen) => selectedAllergens.includes(allergen))

  // Filtrera & ersätt allergiframkallande ingredienser
  function getDisplayableItems(
    items: { name: string; allergens: string[]; alternative?: any }[],
  ) {
    const results: typeof items = []
    for (const item of items) {
      if (!triggersAllergy(item.allergens)) {
        results.push(item)
      } else if (
        item.alternative &&
        !triggersAllergy(item.alternative.allergens)
      ) {
        results.push(item.alternative)
      }
    }
    return results
  }

  // Toggle allergi
  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen],
    )
  }

  // Toggle ingrediens
  const toggleIngredient = (ingredientName: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientName)
        ? prev.filter((i) => i !== ingredientName)
        : [...prev, ingredientName],
    )
  }

  // Nollställ val
  const deselectAll = () => {
    setSelectedAllergens([])
    setSelectedIngredients([])
  }

  // Anropa backend: skicka allergier, ingredienser, servings
  const generateRecipes = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate-recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          allergens: selectedAllergens,
          ingredients: selectedIngredients,
          servings: servings,
        }),
      })

      const data = await response.json()
      if (data.recipes) {
        setRecipes(data.recipes)
      } else if (data.error) {
        setRecipes([data.error])
      } else {
        setRecipes(['Inget svar eller oväntat svar från servern.'])
      }
    } catch (error) {
      console.error(error)
      setRecipes(['Fel vid API-anropet. Se console för mer info.'])
    }
    setLoading(false)
  }

  // Panel för val av ingredienser + antal personer
  const renderIngredientsPanel = () => (
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

      {/* Välj antal personer */}
      <div className="mb-4">
        <label className="font-semibold block mb-2" htmlFor="servings">
          Antal personer
        </label>
        <input
          type="number"
          id="servings"
          min={1}
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))}
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      {/* Allergier */}
      <div className="mb-4">
        <h3 className="font-semibold">Allergier</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {allergenOptions.map((all) => (
            <Checkbox
              key={all}
              label={all}
              checked={selectedAllergens.includes(all)}
              onChange={() => toggleAllergen(all)}
            />
          ))}
        </div>
      </div>

      {/* Kategorier => ingredienser */}
      {Object.entries(recipeIngredients).map(([catName, catItems]) => {
        const displayable = getDisplayableItems(catItems)
        return (
          <div key={catName} className="mb-6">
            <h3 className="font-semibold capitalize mb-2">{catName}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {displayable.map((item) => (
                <Checkbox
                  key={item.name}
                  label={item.name}
                  checked={selectedIngredients.includes(item.name)}
                  onChange={() => toggleIngredient(item.name)}
                />
              ))}
            </div>
          </div>
        )
      })}

      <Button
        onClick={generateRecipes}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Genererar...' : 'Generera Recept'}
      </Button>
    </div>
  )

  // Panel för recept
  const renderRecipesPanel = () => (
    <div className="rounded-lg bg-gray-100 p-4 shadow w-full">
      <h2 className="text-xl font-bold mb-2">Genererade Recept</h2>
      {loading ? (
        <p>Laddar recept...</p>
      ) : recipes.length ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index} className="p-2 border-b">
              {recipe}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">
          Inga recept än. Välj ingredienser, ange antal personer och klicka
          “Generera Recept”!
        </p>
      )}
    </div>
  )

  return (
    <div className="min-h-screen p-4">
      {/* --- MOBIL LAYOUT --- */}
      <div className="block md:hidden">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMobileTab('ingredients')}
            className={`flex-1 py-2 rounded
              ${mobileTab === 'ingredients' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Ingredienser
          </button>
          <button
            onClick={() => setMobileTab('recipes')}
            className={`flex-1 py-2 rounded
              ${mobileTab === 'recipes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Recept
          </button>
        </div>
        {mobileTab === 'ingredients' && renderIngredientsPanel()}
        {mobileTab === 'recipes' && renderRecipesPanel()}
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:flex md:gap-4">
        {/* Recept till vänster */}
        <div className="md:w-1/2">{renderRecipesPanel()}</div>
        {/* Ingredienser till höger */}
        <div className="md:w-1/2">{renderIngredientsPanel()}</div>
      </div>
    </div>
  )
}