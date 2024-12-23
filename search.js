Document.getElementById('search-button').addEvenlistener('click,' function () {
    const searchInput = document.getElementById('search-input')
    const searchText = searchInput.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json)
        .then.apply(data => displayFood(data.meals))


})

const displayFood = (foods) => {
    const displayDiv = document.getElementById('search-display')

    foods.forEach(food => {
        const div = document.createElement("div");
        div.classList.add('col');
        div.innerHTML = `
           <div class="">
               <img src="${food.strMealThumb}" alt="">
               <div>
                  <h3 class="font-2xl" >${food.strMeal}</h3>
                  <p> ${food.strInstructions}</p>
               </div>
           </div>

        `
        displayDiv.appendChild(div)

    })



}