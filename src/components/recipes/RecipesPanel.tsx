import React, { forwardRef } from 'react'
import { Recipe } from './RecipeGenerator' // justera sökvägen efter din struktur

interface RecipesPanelProps {
  recipes: Recipe[]
  loading: boolean
  selectedRecipe: number | null
  onSelectRecipe: (index: number) => void
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
                  {/* Title */}
                  <h3 className="font-bold">{recipe.title}</h3>

                  {/* Ingredients */}
                  <div>
                    <strong>Ingredienser: </strong>
                    <p>
                      {Array.isArray(ingredients)
                        ? ingredients.join(', ')
                        : ingredients}
                    </p>
                  </div>

                  {/* Instructions */}
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