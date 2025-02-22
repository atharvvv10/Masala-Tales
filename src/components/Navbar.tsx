import React from 'react';

interface NavbarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  mobile?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ categories, selectedCategory, setSelectedCategory, mobile = false }) => {
  return (
    <nav className={`${mobile ? 'flex flex-col space-y-2' : 'flex space-x-6'}`}>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            ${mobile ? 'w-full text-left px-4 py-2' : 'px-4 py-2 rounded-full'}
            ${selectedCategory === category 
              ? 'bg-white text-orange-500' 
              : 'text-white hover:bg-orange-600'
            }
            transition-colors duration-300 capitalize
          `}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;