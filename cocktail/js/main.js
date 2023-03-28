let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function loadData(dataArr) {
    // console.log(dataArr)
    if (dataArr === null) {
        alert('Enter proper cocktail name!');
        location.reload();
        return;
    }

    cocktailIndex = 0;
    cocktailCollection = dataArr;

    // console.log(cocktailCollection);
    imgElement.src = cocktailCollection[cocktailIndex].strDrinkThumb;
    imgElement.onload = render;
}

function render() {

    imgElement.src = cocktailCollection[cocktailIndex].strDrinkThumb;

    let name = document.querySelector('h2')
    name.innerText = `${cocktailCollection[cocktailIndex].strDrink}`

    instructions.innerHTML = ``

    let ins = cocktailCollection[cocktailIndex].strInstructions.split('. ')
    let insBr = ins.map(step => '<li> ' + step + ' </li>').join(' ')

    instructions.innerHTML = `<ol> ${insBr} </ol>`
    instructionsHeading.parentNode.insertBefore(instructions, instructionsHeading.nextSibling);

    if (hidden === true){
        unhide();
    }
}

function getData() {
    let cocktail = inp.value;
    cocktail = cocktail.replaceAll(" ", "%20");
    let cocktailUrl = url + cocktail;

    fetch(cocktailUrl)
    .then(res => res.json())
    .then(data => loadData(data.drinks))
    .catch(err => console.log(`error: ${err}`))
}

function nextCocktail() {
    if (cocktailCollection === null) {
        alert('Enter cocktail name first!');
        location.reload();
        return;
    }

    if (cocktailCollection.length === 1) {
        alert("Only one cocktail is known")
        return;
    }

    cocktailIndex = (cocktailIndex + 1) % cocktailCollection.length;
    
    imgElement.src = cocktailCollection[cocktailIndex].strDrinkThumb;
    imgElement.onload = render;
}

function prevCocktail() {
    if (cocktailCollection === null) {
        alert('Enter cocktail name first!');
        location.reload();
        return;
    }

    if (cocktailCollection.length === 1) {
        alert("Only one cocktail is known")
        return;
    }

    if (cocktailIndex === 0) {
        cocktailIndex = cocktailCollection.length - 1;
    } else {
        cocktailIndex--;
    }

    imgElement.src = cocktailCollection[cocktailIndex].strDrinkThumb;
    imgElement.onload = render;
}

function unhide() {
        document.querySelector('#main').classList.remove("hidden");
        hidden = false;
}

let getCocktailBtn = document.querySelector('#getData');
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let inp = document.querySelector('input');
let instructionsHeading = document.querySelector('#instructions-heading');
let instructions =  document.querySelector('#instructions');
let imgElement = document.querySelector('img');

let hidden = true;

let cocktailCollection = null;
let cocktailIndex = 0;




getCocktailBtn.addEventListener('click', getData);
nextBtn.addEventListener('click', nextCocktail);
prevBtn.addEventListener('click', prevCocktail);

