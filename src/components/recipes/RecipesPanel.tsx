import React, { forwardRef } from 'react'

interface RecipesPanelProps {
  recipes: string[]
  loading: boolean
}

const RecipesPanel = forwardRef<HTMLDivElement, RecipesPanelProps>(
  ({ recipes, loading }, ref) => {
    return (
      <div ref={ref} className="rounded-lg bg-gray-100 p-4 shadow w-full">
        <h2 className="text-xl font-bold mb-2">Genererade Recept</h2>
        {loading ? (
          <p>Laddar recept...</p>
        ) : recipes.length ? (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index} className="p-2 border-b whitespace-pre-wrap">
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
  },
)

RecipesPanel.displayName = 'RecipesPanel'
export default RecipesPanel