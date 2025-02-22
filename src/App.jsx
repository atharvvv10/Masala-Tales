import React, { useState } from 'react';
import { Search, UtensilsCrossed, Menu, X } from 'lucide-react';
import { recipes as initialRecipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const categories = ['all', 'vegetarian', 'non-vegetarian', 'desserts', 'snacks'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <UtensilsCrossed className="w-8 h-8 mr-3" />
              <h1 className="text-3xl font-bold">Masala Tales</h1>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Navbar 
                categories={categories} 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="py-2 px-4 pr-10 rounded-full w-64 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <Navbar 
                categories={categories} 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                mobile={true}
              />
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="bg-cover bg-center h-96 flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=2000')",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Discover Authentic Indian Recipes</h2>
          <p className="text-xl mb-8">Explore the rich flavors and traditions of Indian cuisine</p>
          <button 
            onClick={() => document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Start Cooking
          </button>
        </div>
      </div>

      {/* Recipe Grid */}
      <main id="recipes" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onDelete={handleDeleteRecipe}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;