import RecipeGenerator from '@/components/recipes/RecipeGenerator'

export default function RecipesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Receptgenerator</h1>
      <RecipeGenerator />
    </div>
  )
}