document.addEventListener('DOMContentLoaded', () => {
  const filterForm = document.getElementById('filter-form');
  const searchForm = document.getElementById('search-form');
  const recipeList = document.getElementById('recipe-list');

  // Sample recipe data
  const recipes = [
    { name: 'Veggie Omelette', type: 'veg', dayTime: 'morning' },
    { name: 'Chicken Handi', type: 'non-veg', dayTime: 'evening' },
    { name: 'Cheese Pizza', type: 'veg', dayTime: 'afternoon' },
    { name: 'Fish Curry', type: 'non-veg', dayTime: 'night' },
    { name: 'Mushroom Risotto', type: 'veg', dayTime: 'evening' },
  ];

  // Filter recipes based on type and day-time
  filterForm.addEventListener('change', () => {
    const type = document.querySelector('input[name="type"]:checked').value;
    const dayTime = document.querySelector('input[name="day-time"]:checked').value;

    let filteredRecipes = recipes.filter(recipe => recipe.type === type);
    filteredRecipes = filteredRecipes.filter(recipe => recipe.dayTime === dayTime);

    displayRecipes(filteredRecipes);
  });

  // Search recipes based on name
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    let searchedRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

    displayRecipes(searchedRecipes);
  });

  // Display recipes in the UI
  const displayRecipes = (recipes) => {
    recipeList.innerHTML = '';

    if (recipes.length === 0) {
      recipeList.innerHTML = '<li>No recipes found.</li>';
    } else {
      recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.name;
        recipeList.appendChild(listItem);
      });
    }
  };

  // Display initial recipes
  displayRecipes(recipes);
});
