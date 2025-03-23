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
  if (ing && typeof ing === 'object') {
    // Om objektet har egenskaper "name" och "quantity" eller "amount"
    if ('name' in ing && ('quantity' in ing || 'amount' in ing)) {
      const qty = ing.quantity || ing.amount
      return `${ing.name} (${qty})`
    }
    // Om objektet har egenskaper "amount" men inte "name"
    if ('amount' in ing) {
      // Försök hitta en annan nyckel, t.ex. om det bara är { "Kyckling": "600g", "amount": "600g" }
      // Men om det inte finns "name", returnera en sträng med alla nycklar
      const keys = Object.keys(ing)
      if (keys.length === 1) {
        const key = keys[0]
        return `${key} (${ing[key]})`
      } else {
        // Ta första nyckeln som namn och "amount" som mängd om möjligt
        if (keys.includes('amount')) {
          const key = keys.find((k) => k !== 'amount') || 'Okänd'
          return `${key} (${ing.amount})`
        }
      }
    }
    // Om objektet bara har en enda nyckel (exempelvis { "Kyckling": "600g" })
    const keys = Object.keys(ing)
    if (keys.length === 1) {
      const key = keys[0]
      return `${key} (${ing[key]})`
    }
  }
  // Om ing är en sträng eller null/undefined
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