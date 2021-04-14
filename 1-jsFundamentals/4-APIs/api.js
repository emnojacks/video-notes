const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();

    fetch(baseURL)
        .then(result => result.json())
        .then(json => {
            console.log(json)
                //new func that gets passed the json array of objects
            displayRockets(json);
        })
}

function displayRockets(rockets) {
    //rockets is an array
    rockets.forEach(r => {
        //r = each rocket bc rockets is an array
        let rocket = document.createElement('li');
        rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    })
}