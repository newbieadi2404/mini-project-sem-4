// Assuming you have an array of recipe objects, each with a 'name', 'ingredients', and 'steps' property
const recipes = [
    {
      name: 'Veggie Omelette',
      ingredients: ['Eggs', 'Milk', 'Butter', 'Bell peppers', 'Onion', 'Mushrooms', 'Cheese'],
      steps: ['Beat the eggs and milk together', 'Heat the butter in a pan', 'Add the veggies and cook until soft', 'Pour the egg mixture into the pan', 'Add cheese and cook until set', 'Serve hot'],
    },
    {
      name: 'Chicken Biryani',
      ingredients: ['Chicken', 'Yogurt', 'Onion', 'Garlic', 'Ginger', 'Spices', 'Rice', 'Water', 'Oil'],
      steps: ['Marinate the chicken', 'Cook the rice', 'Cook the chicken', 'Layer the rice and chicken', 'Cook on low heat', 'Serve hot'],
    },
    // More recipes...
  ];
  
  // Get the recipe name from the clicked list item
  const getRecipeName = (event) => {
    const clickedListItem = event.target.closest('li');
    const recipeName = clickedListItem.textContent;
  
    return recipeName;
  };
  
  // Get the recipe object with the given name
  const getRecipe = (name) => {
    return recipes.find((recipe) => recipe.name === name);
  };
  
  // Display the recipe ingredients and number of steps in a modal
  const displayRecipeDetails = (recipe) => {
    const modal = document.getElementById('recipe-modal');
    const ingredientsList = document.getElementById('recipe-ingredients');
    const stepsCount = document.getElementById('recipe-steps-count');
  
    // Populate the modal with the recipe ingredients and steps
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach((ingredient) => {
      const listItem = document.createElement('li');
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
    });
  
    stepsCount.textContent = recipe.steps.length;
  
    // Show the modal
    modal.style.display = 'block';
  };
  
  // Hide the recipe modal
  const hideRecipeModal = () => {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
  };
  
  // Connect this script to the previous one
  const recipeList = document.getElementById('recipe-list');
  
  // Add a click event listener to each list item
  recipeList.addEventListener('click', (event) => {
    const recipeName = getRecipeName(event);
    const recipe = getRecipe(recipeName);
  
    if (recipe) {
      displayRecipeDetails(recipe);
    }
  });
  
  // Add a click event listener to the close button in the modal
  const closeButton = document.getElementById('recipe-modal-close');
  
  closeButton.addEventListener('click', () => {
    hideRecipeModal();
  });