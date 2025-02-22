import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddRecipeModalProps {
  onClose: () => void;
  onAdd: (recipe: any) => void;
  categories: string[];
}

const AddRecipeModal: React.FC<AddRecipeModalProps> = ({ onClose, onAdd, categories }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    chef: '',
    prepTime: '',
    cookTime: '',
    difficulty: 'Easy',
    category: categories[0],
    image: '',
    ingredients: [''],
    instructions: ['']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(recipe);
  };

  const addField = (field: 'ingredients' | 'instructions') => {
    setRecipe({
      ...recipe,
      [field]: [...recipe[field], '']
    });
  };

  const updateField = (field: 'ingredients' | 'instructions', index: number, value: string) => {
    const newArray = [...recipe[field]];
    newArray[index] = value;
    setRecipe({
      ...recipe,
      [field]: newArray
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Add New Recipe</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Title</label>
              <input
                type="text"
                required
                value={recipe.title}
                onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chef Name</label>
              <input
                type="text"
                required
                value={recipe.chef}
                onChange={(e) => setRecipe({ ...recipe, chef: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prep Time</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 30 mins"
                  value={recipe.prepTime}
                  onChange={(e) => setRecipe({ ...recipe, prepTime: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cook Time</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 45 mins"
                  value={recipe.cookTime}
                  onChange={(e) => setRecipe({ ...recipe, cookTime: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                <select
                  value={recipe.difficulty}
                  onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={recipe.category}
                  onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input
                type="url"
                required
                placeholder="https://example.com/image.jpg"
                value={recipe.image}
                onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    required
                    value={ingredient}
                    onChange={(e) => updateField('ingredients', index, e.target.value)}
                    className="flex-1 p-2 border rounded focus:ring-2 focus:ring-orange-300"
                    placeholder="Enter ingredient"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField('ingredients')}
                className="text-orange-500 hover:text-orange-600 text-sm"
              >
                + Add Ingredient
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    required
                    value={instruction}
                    onChange={(e) => updateField('instructions', index, e.target.value)}
                    className="flex-1 p-2 border rounded focus:ring-2 focus:ring-orange-300"
                    placeholder="Enter instruction step"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField('instructions')}
                className="text-orange-500 hover:text-orange-600 text-sm"
              >
                + Add Instruction
              </button>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeModal;