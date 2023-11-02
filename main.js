let score = 0;
let goodAnswers = [];

function updatePoints() {
    score++;
    document.getElementById("points").innerHTML = score.toString();
}
function addGoodAnswer(country) {
    goodAnswers.push(country.toLowerCase());
}

// Lier imput à java
document.getElementById("country").addEventListener("input", (e) => {
    console.log("on a changé la valeur" + e.target.value);
    let countryInput = e.target.value.toLowerCase();
    let countryArrayLowerCase = newCountryArray.map((country) =>
        country.toLowerCase()
    );
    // display error if user imput already in good answer
    if (goodAnswers.includes(countryInput)) {
        return (document.getElementById("error").innerHTML = "already found !");
    }
    document.getElementById("error").innerHTML = " ";
   
   const indexCountry = countryArrayLowerCase.indexOf(countryInput) 
    if (
        indexCountry >=0  &&
        !goodAnswers.includes(countryInput)
    ) {
        const country = newCountryArray[indexCountry]
        document.querySelectorAll('.'+ country).forEach(value => value.style.fill= "indianRed"); 
        document.querySelectorAll(`[name=${country}]`).forEach(value => value.style.fill="indianRed"); 

        updatePoints();
        addGoodAnswer(e.target.value);
        e.target.value = ''
    }
    console.log(goodAnswers) // ex. France



    

    // target the 'map' for each element check if has a class = France or name (attribute) = France
    // if found element --> add class 
});

// Recover the map and change the color 



