// Anpassa sökvägen för import
import {useEffect, useRef, useState} from 'react'
import IngredientsPanel from './IngredientsPanel'
import RecipesPanel from './RecipesPanel'
import {generateRecipesAPI} from '@/api/recipeApi'
import {recipeIngredients} from '@/data/recipeIngredients'

// En typ som matchar JSON-strukturen
export interface Recipe {
  id: string
  title: string
  content: {
    ingredients: string[]
    instructions: string
  }
}

export default function RecipeGenerator() {
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [selectedProteins, setSelectedProteins] = useState<string[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [servings, setServings] = useState<number>(4)
  const [mobileTab, setMobileTab] = useState<'ingredients' | 'recipes'>(
    'ingredients',
  )
  const [cuisine, setCuisine] = useState<string>('')
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null)

  const recipesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Om du vill läsa in tidigare sparade recept:
    const savedRecipes = localStorage.getItem('recipes')
    if (savedRecipes && savedRecipes !== 'undefined') {
      try {
        setRecipes(JSON.parse(savedRecipes))
      } catch (error) {
        console.error('Error parsing saved recipes:', error)
      }
    }
    const savedSelectedRecipe = localStorage.getItem('selectedRecipe')
    if (savedSelectedRecipe && savedSelectedRecipe !== 'undefined') {
      try {
        setSelectedRecipe(JSON.parse(savedSelectedRecipe))
      } catch (error) {
        console.error('Error parsing selected recipe:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Spara recept vid ändring
    localStorage.setItem('recipes', JSON.stringify(recipes))
  }, [recipes])

  useEffect(() => {
    // Spara valt recept
    localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe))
  }, [selectedRecipe])

  const handleGenerateRecipes = async () => {
    if (window.innerWidth < 768) {
      setMobileTab('recipes')
    }
    setLoading(true)
    try {
      const data = await generateRecipesAPI({
        allergens: selectedAllergens,
        ingredients: selectedIngredients,
        proteins: selectedProteins, // Skicka med proteinvalet
        servings,
        cuisine,
      })
      console.log('DEBUG data from server:', data) // Se vad som faktiskt kommer
      if (data.recipes) {
        // data.recipes bör vara en array av { id, title, content: { ingredients, instructions } }
        setRecipes(data.recipes)
        setSelectedRecipe(null)
      } else if (data.error) {
        // Om du vill presentera error som ett "recept"
        setRecipes([
          {
            id: 'error',
            title: 'Error',
            content: {
              ingredients: [],
              instructions: data.error,
            },
          },
        ])
      } else {
        setRecipes([
          {
            id: 'unknown',
            title: 'Okänt fel',
            content: {
              ingredients: [],
              instructions: 'Unexpected server response.',
            },
          },
        ])
      }
      recipesRef.current?.scrollIntoView({ behavior: 'smooth' })
      if (data.debugPrompt) {
        console.log('Prompt som skickades:', data.debugPrompt)
      }
    } catch (error: any) {
      console.error(error)
      setRecipes([
        {
          id: 'exception',
          title: 'Fel',
          content: {
            ingredients: [],
            instructions: error.message || 'API error.',
          },
        },
      ])
    }
    setLoading(false)
  }

  const deselectAll = () => {
    setSelectedAllergens([])
    setSelectedIngredients([])
    setSelectedProteins([])
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
            selectedProteins={selectedProteins}
            setSelectedProteins={setSelectedProteins}
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
          <RecipesPanel
            recipes={recipes}
            loading={loading}
            ref={recipesRef}
            selectedRecipe={selectedRecipe}
            onSelectRecipe={setSelectedRecipe}
          />
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:gap-4">
        <div className="md:w-1/2">
          <RecipesPanel
            recipes={recipes}
            loading={loading}
            ref={recipesRef}
            selectedRecipe={selectedRecipe}
            onSelectRecipe={setSelectedRecipe}
          />
        </div>
        <div className="md:w-1/2">
          <IngredientsPanel
            selectedAllergens={selectedAllergens}
            setSelectedAllergens={setSelectedAllergens}
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
            selectedProteins={selectedProteins}
            setSelectedProteins={setSelectedProteins}
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
