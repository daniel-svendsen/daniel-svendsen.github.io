import React, { forwardRef } from 'react'
import { Recipe } from './RecipeGenerator' // justera sökvägen efter din struktur

interface RecipesPanelProps {
  recipes: Recipe[]
  loading: boolean
  selectedRecipe: number | null
  onSelectRecipe: (index: number) => void
}

// Hjälpfunktion som tolkar en ingrediens utifrån olika möjliga strukturer
const formatIngredient = (ing: any): string => {
  // 1. Objektcheck
  if (ing && typeof ing === 'object') {
    // 1a. name + quantity/amount
    if ('name' in ing && ('quantity' in ing || 'amount' in ing)) {
      const qty = ing.quantity || ing.amount
      return `${ing.name} (${qty})`
    }
    // 1b. enbart "amount"
    if ('amount' in ing) {
      const keys = Object.keys(ing)
      if (keys.length === 1) {
        // Ex. { "Kyckling": "600g" }
        const key = keys[0]
        return `${key} (${ing[key]})`
      } else {
        // Hitta första nyckeln som inte är "amount"
        if (keys.includes('amount')) {
          const key = keys.find((k) => k !== 'amount') || 'Okänd'
          return `${key} (${ing.amount})`
        }
      }
    }
    // 1c. Om objektet bara har en enda nyckel (ex. { "Kyckling": "600g" })
    const keys = Object.keys(ing)
    if (keys.length === 1) {
      const key = keys[0]
      return `${key} (${ing[key]})`
    }

    // 1d. Sista fallback: Skriv ut alla key-value-par i objektet
    // Exempel: "Kyckling=600g, salt=1 tsk"
    const pairs = keys.map((key) => `${key}=${ing[key]}`).join(', ')
    return pairs || 'Okänd ingrediens'
  }

  // 2. Om det inte är ett objekt
  return ing || 'Okänd ingrediens'
}

const RecipesPanel = forwardRef<HTMLDivElement, RecipesPanelProps>(
  ({ recipes, loading, selectedRecipe, onSelectRecipe }, ref) => {
    return (
      <div ref={ref} className="rounded-lg bg-gray-100 p-4 shadow w-full">
        <h2 className="text-xl font-bold mb-2">Genererade Recept</h2>
        {loading ? (
          <p>Laddar recept...</p>
        ) : recipes.length ? (
          <ul>
            {recipes.map((recipe, index) => {
              // Flera fallbacks för ingredienser
              const ingredients =
                recipe.content.ingredients ||
                recipe.content.ingredienser ||
                recipe.content.ingrediens ||
                recipe.content.quantity ||
                recipe.content.kvantitet ||
                []
              // Flera fallbacks för instruktioner
              const instructions =
                recipe.content.instructions ||
                recipe.content.tillagning ||
                recipe.content['tillvägagångssätt'] ||
                recipe.content.instruktioner ||
                recipe.content.instruktion ||
                ''

              return (
                <li
                  key={recipe.id}
                  onClick={() => onSelectRecipe(index)}
                  className={`p-4 border-b cursor-pointer transition-colors ${
                    selectedRecipe === index
                      ? 'bg-yellow-50 border-l-4 border-yellow-400'
                      : ''
                  }`}
                >
                  <h3 className="font-bold">{recipe.title}</h3>
                  <div>
                    <strong>Ingredienser: </strong>
                    <p>
                      {Array.isArray(ingredients)
                        ? ingredients.map(formatIngredient).join(', ')
                        : ingredients || 'Okända ingredienser'}
                    </p>
                  </div>
                  <div>
                    <strong>Tillvägagångssätt: </strong>
                    <p style={{ whiteSpace: 'pre-line' }}>{instructions}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="text-gray-600">
            Inga recept än. Välj ingredienser, ange antal personer och klicka
            “Generera Recept”!
          </p>
        )}
      </div>
    )
  },
)

RecipesPanel.displayName = 'RecipesPanel'
export default RecipesPanel