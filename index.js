//Afficher le header
let buttonMenu = document.getElementById('button-menu');
let menu = document.getElementById('menu');
let fermer = document.getElementById('fermer');


buttonMenu.addEventListener("click", function(){

    if(menu.style.left === '-440px' || menu.style.left === ''){
        menu.style.left = '0';
    }
})

fermer.addEventListener("click", function(){
    if(menu.style.left === '0' || menu.style.display === ''){
        menu.style.left = '-440px';
    }
})

//About

// Get all the buttons and text elements
let buttons = document.querySelectorAll('[id^="btn-about"]');
let texts = document.querySelectorAll('[id^="texte"]');

texts.forEach(text => {
    text.style.display = 'none';
});

// Loop through each button
buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        // Hide all text elements

        texts.forEach(text => {
            text.style.display = 'none';
        });

        // Show the text associated with the clicked button
        let associatedText = document.getElementById(`texte-${index + 1}`);
        associatedText.style.display = 'block';
    });
});


//API WEATHER
//Search bar
//Lettre en capital

function weather() {
    const countryName = document.getElementById('countryName');
    const searchBar = document.getElementById('searchBar');
    let city = searchBar.value.trim();
    let icon = document.getElementById('icon');
    let tempState = document.getElementById('tempState');
    // Si l'input est vide, on assigne "Paris" comme ville par défaut
    if (city === '') {
        city = 'Paris';
        icon.src = 'Ressources/froid.png';
    }

    const apiKey  = "7a2aba2f5f0b46a0746b71224d6278ad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            // Nom du pays (ou ville)
            //Par défaut
            countryName.innerHTML = city.toUpperCase();
            // Température
            let txtTemp = document.getElementById('temp');
            let averageTemp = data.main.temp;
            let temp = Math.trunc(averageTemp);

            if(temp > 25){
                countryName.style.color = "#CE4257";
                //console.log('chaud !');
                txtTemp.style.color = '#CE4257';
                icon.src = 'Ressources/chaud.png';
                tempState.style.color = '#CE4257';
                tempState.innerHTML = 'Chaud !'
            }

            if(temp < 25){
                countryName.style.color = "#415A77";
                //console.log('froid !');
                txtTemp.style.color = '#415A77';
                icon.src = 'Ressources/froid.png';
                tempState.style.color = '#415A77';
                tempState.innerHTML = 'Cold !'
            }

            txtTemp.innerHTML = temp;

            // Réinitialiser l'input après la recherche
            searchBar.value = '';
            searchBar.style.color = '';
        } else {
            alert('Aucune ville trouvée');
            searchBar.style.color = '#ad2831';
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

document.getElementById('btnSearch').addEventListener("click", function() {
    weather();
});

weather();

/*
<p>Description : ${description}</p>
<p>Humidité : ${humidity}%</p>
<p>Vitesse du vent : ${windSpeed} m/s</p>
*/