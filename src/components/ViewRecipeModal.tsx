import React from 'react';
import { X, Clock, ChefHat, GaugeCircle } from 'lucide-react';

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
  category: string;
}

interface ViewRecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const ViewRecipeModal: React.FC<ViewRecipeModalProps> = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
          
          <div className="flex items-center mb-4">
            <ChefHat className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-gray-600 text-lg">{recipe.chef}</span>
          </div>

          <div className="flex gap-6 mb-6 text-gray-600">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-2" />
              <span>Prep: {recipe.prepTime}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-2" />
              <span>Cook: {recipe.cookTime}</span>
            </div>
            <div className="flex items-center">
              <GaugeCircle className="w-5 h-5 text-orange-500 mr-2" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instructions</h3>
            <ol className="list-decimal list-inside space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeModal;