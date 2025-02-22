import { useState } from "react";
import { recipes } from "./data/recipes"; // Ensure the correct path

// Define the Recipe type explicitly
interface Recipe {
  id: number;
  title: string;
  chef: string;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Book</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-52 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.title}</h2>
              <p className="text-gray-600">By {recipe.chef}</p>
              <p className="text-gray-500">{recipe.prepTime} | {recipe.cookTime}</p>
              <p className="text-gray-500 capitalize">Difficulty: {recipe.difficulty}</p>

              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setSelectedRecipe(selectedRecipe === recipe.id ? null : recipe.id)}
              >
                {selectedRecipe === recipe.id ? "Hide Details" : "View Recipe"}
              </button>

              {selectedRecipe === recipe.id && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Ingredients:</h3>
                  <ul className="list-disc pl-5">
                    {recipe.ingredients.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-lg mt-3">Instructions:</h3>
                  <ol className="list-decimal pl-5">
                    {recipe.instructions.map((step: string, index: number) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
