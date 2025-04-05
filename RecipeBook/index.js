let inputBox = document.getElementById("search")
let foodListDiv = document.getElementById("foodList")

function getRecipe() {

    const searchWord = inputBox.value.trim();
    if (searchWord === "") {
        foodListDiv.innerHTML = `
      <p class="empty-msg">
        🍽️ Search for a meal to get started!<br>
        Try something like <em>Pizza</em>, <em>Chicken</em>, or <em>Rice</em>.
      </p>
    `;
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`)
            .then(response => response.json())
            .then(data => {
                foodListDiv.innerHTML = '';
                console.log(data);
                if (data && data.meals) {
                    const mealsList = data.meals;
                    mealsList.forEach(meal => {
                        const mealCard = document.createElement('div');
                        mealCard.classList.add('meal-card');

                        mealCard.innerHTML = `
                          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                          <h3>${meal.strMeal}</h3>
                          <p><strong> ${meal.strArea} Cuisines</strong></p>
                        `;
                        mealCard.addEventListener('click', () => {
                            document.getElementById('modalMealName').textContent = meal.strMeal;
                            document.getElementById('modalMealImg').src = meal.strMealThumb;
                            document.getElementById('modalMealArea').textContent = meal.strArea;
                            document.getElementById('modalMealCategory').textContent = meal.strCategory;
                            document.getElementById('modalMealInstructions').innerHTML = meal.strInstructions
                                .split('\r\n')
                                .filter(line => line.trim() !== '')
                                .map((line, index) => `<p><strong>Step ${index + 1}:</strong> ${line.trim()}</p>`)
                                .join('');
                            document.getElementById('modalYoutubeLink').href = meal.strYoutube;
                            document.getElementById('mealModal').style.display = 'block';
                            const ingredientsList = document.getElementById('modalMealIngredients');
                            ingredientsList.innerHTML = '';
                            for (let i = 1; i <= 20; i++) {
                                const ingredient = meal[`strIngredient${i}`];
                                const measure = meal[`strMeasure${i}`];

                                if (ingredient && ingredient.trim()) {
                                    const li = document.createElement('li');
                                    li.textContent = `${ingredient} - ${measure}`;
                                    ingredientsList.appendChild(li);
                                }
                            }
                        });
                        foodListDiv.appendChild(mealCard);
                    });
                    //close box
                    document.querySelector('.close-button').addEventListener('click', () => {
                        document.getElementById('mealModal').style.display = 'none';
                    });
                    //close when click outside the box
                    window.addEventListener('click', (event) => {
                        const modal = document.getElementById('mealModal');
                        if (event.target === modal) {
                            modal.style.display = 'none';
                        }
                    });
                }
                else {
                    foodListDiv.innerHTML = '<p>No meals found. Try another name!</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                foodListDiv.innerText = 'Failed to load data.';
            });
    }
}
window.addEventListener('DOMContentLoaded', () => {
    foodListDiv.innerHTML = `
      <p class="empty-msg">
        🍽️ Search for a meal to get started!<br>
        Try something like <em>Pizza</em>, <em>Chicken</em>, or <em>Rice</em>.
      </p>
    `;
  });