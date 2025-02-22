export interface Recipe {
  id: number;
  title: string;
  chef: string;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Butter Chicken",
    chef: "Chef Priya Kumar",
    prepTime: "30 mins",
    cookTime: "45 mins",
    difficulty: "Medium",
    category: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "1kg chicken thighs",
      "2 cups tomato puree",
      "1 cup heavy cream",
      "2 tbsp butter",
      "2 tbsp garam masala",
      "1 tbsp ginger paste",
      "1 tbsp garlic paste",
      "Salt to taste"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices",
      "Cook chicken in tandoor or oven",
      "Prepare gravy with tomatoes and cream",
      "Combine chicken with gravy",
      "Finish with butter and kasuri methi"
    ]
  },
  {
    id: 2,
    title: "Biryani",
    chef: "Chef Rajesh Sharma",
    prepTime: "45 mins",
    cookTime: "60 mins",
    difficulty: "Hard",
    category: "non-vegetarian",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "2 cups basmati rice",
      "500g lamb/chicken",
      "2 onions",
      "Whole spices",
      "Saffron",
      "Ghee",
      "Mint leaves",
      "Yogurt"
    ],
    instructions: [
      "Marinate meat with spices and yogurt",
      "Cook rice with whole spices",
      "Layer meat and rice",
      "Add saffron milk",
      "Dum cook for 30 minutes"
    ]
  },
  {
    id: 3,
    title: "Dal Makhani",
    chef: "Chef Anjali Desai",
    prepTime: "20 mins",
    cookTime: "6 hours",
    difficulty: "Medium",
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "1 cup black lentils",
      "1/4 cup red kidney beans",
      "Cream",
      "Butter",
      "Tomato puree",
      "Spices",
      "Garlic",
      "Ginger"
    ],
    instructions: [
      "Soak lentils overnight",
      "Cook with spices until soft",
      "Add cream and butter",
      "Simmer on low heat",
      "Garnish with cream"
    ]
  },
  {
    id: 4,
    title: "Gulab Jamun",
    chef: "Chef Meera Patel",
    prepTime: "30 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    category: "desserts",
    image: "https://media.istockphoto.com/id/2168833766/photo/sweet-gulab-jamun-served-in-white-bowl-famous-indian-dessert-sweets-isolated-indoor-studio.jpg?s=612x612&w=0&k=20&c=Q0u-UiZRuI70zObHd1beOaLDhQvyq00C--q3rInhYxY=",
    ingredients: [
      "Milk powder",
      "All-purpose flour",
      "Ghee",
      "Milk",
      "Sugar",
      "Cardamom",
      "Rose water",
      "Saffron"
    ],
    instructions: [
      "Make dough with milk powder and flour",
      "Shape into small balls",
      "Deep fry until golden",
      "Soak in sugar syrup",
      "Garnish with nuts"
    ]
  },
  {
    id: 5,
    title: "Samosa",
    chef: "Chef Vikram Singh",
    prepTime: "45 mins",
    cookTime: "30 mins",
    difficulty: "Medium",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "All-purpose flour",
      "Potatoes",
      "Green peas",
      "Spices",
      "Oil",
      "Ginger",
      "Green chilies",
      "Coriander"
    ],
    instructions: [
      "Prepare dough for outer covering",
      "Cook potato filling with spices",
      "Shape and fill samosas",
      "Deep fry until golden brown",
      "Serve with chutney"
    ]
  }
];
