import { useRef, useState } from 'react'
import IngredientsPanel from './IngredientsPanel'
import RecipesPanel from './RecipesPanel'
import { generateRecipesAPI } from '@/api/recipeApi'
import { recipeIngredients } from '@/data/recipeIngredients'

export default function RecipeGenerator() {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [recipes, setRecipes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [servings, setServings] = useState<number>(4)
  const [mobileTab, setMobileTab] = useState<'ingredients' | 'recipes'>(
    'ingredients',
  )
  const [cuisine, setCuisine] = useState<string>('')

  // Reference for scrolling to recipes panel
  const recipesRef = useRef<HTMLDivElement>(null)

  const handleGenerateRecipes = async () => {
    // If on mobile, switch to the recipes tab
    if (window.innerWidth < 768) {
      setMobileTab('recipes')
    }
    setLoading(true)
    try {
      const data = await generateRecipesAPI({
        allergens: selectedAllergens,
        ingredients: selectedIngredients,
        servings,
        cuisine,
      })
      if (data.recipes) {
        setRecipes(data.recipes)
      } else if (data.error) {
        setRecipes([data.error])
      } else {
        setRecipes(['Unexpected server response.'])
      }
      recipesRef.current?.scrollIntoView({ behavior: 'smooth' })
    } catch (error: any) {
      console.error(error)
      setRecipes([error.message || 'API error.'])
    }
    setLoading(false)
  }

  const deselectAll = () => {
    setSelectedAllergens([])
    setSelectedIngredients([])
  }

  return (
    <div className="min-h-screen p-4">
      <div className="mb-4 text-gray-700 text-sm">
        Välj ingredienser, allergier och matkultur (valfritt). Ange antal
        personer och klicka "Generera Recept".
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMobileTab('ingredients')}
            className={`flex-1 py-2 rounded ${mobileTab === 'ingredients' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Ingredienser
          </button>
          <button
            onClick={() => setMobileTab('recipes')}
            className={`flex-1 py-2 rounded ${mobileTab === 'recipes' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            Recept
          </button>
        </div>
        {mobileTab === 'ingredients' && (
          <IngredientsPanel
            selectedAllergens={selectedAllergens}
            setSelectedAllergens={setSelectedAllergens}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
            servings={servings}
            setServings={setServings}
            cuisine={cuisine}
            setCuisine={setCuisine}
            recipeIngredients={recipeIngredients}
            deselectAll={deselectAll}
            onGenerateRecipes={handleGenerateRecipes}
            loading={loading}
          />
        )}
        {mobileTab === 'recipes' && (
          <RecipesPanel recipes={recipes} loading={loading} ref={recipesRef} />
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:gap-4">
        <div className="md:w-1/2">
          <RecipesPanel recipes={recipes} loading={loading} ref={recipesRef} />
        </div>
        <div className="md:w-1/2">
          <IngredientsPanel
            selectedAllergens={selectedAllergens}
            setSelectedAllergens={setSelectedAllergens}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
            servings={servings}
            setServings={setServings}
            cuisine={cuisine}
            setCuisine={setCuisine}
            recipeIngredients={recipeIngredients}
            deselectAll={deselectAll}
            onGenerateRecipes={handleGenerateRecipes}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}