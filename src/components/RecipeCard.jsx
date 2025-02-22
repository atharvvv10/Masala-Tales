import React, { useState } from 'react';
import { Clock, ChefHat, GaugeCircle, Trash2, Edit, Eye } from 'lucide-react';

const RecipeCard = ({ recipe, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would update the backend
    console.log('Saving recipe:', editedRecipe);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={recipe.image} 
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {isEditing ? (
          <input
            type="text"
            value={editedRecipe.title}
            onChange={(e) => setEditedRecipe({ ...editedRecipe, title: e.target.value })}
            className="text-2xl font-bold text-gray-800 mb-2 w-full border rounded p-1"
          />
        ) : (
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
        )}
        
        <div className="flex items-center mb-4">
          <ChefHat className="w-4 h-4 text-orange-500 mr-2" />
          <span className="text-gray-600">{recipe.chef}</span>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-orange-500" />
            <span>{recipe.prepTime} + {recipe.cookTime}</span>
          </div>
          <div className="flex items-center">
            <GaugeCircle className="w-4 h-4 mr-1 text-orange-500" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <button 
            onClick={() => alert('View Recipe Details')} 
            className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" /> View
          </button>
          <button 
            onClick={() => setIsEditing(!isEditing)} 
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
          >
            <Edit className="w-4 h-4 mr-2" /> {isEditing ? 'Save' : 'Edit'}
          </button>
          <button 
            onClick={() => onDelete(recipe.id)} 
            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
          >
            <Trash2 className="w-4 h-4 mr-2" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;