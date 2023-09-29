{
let countries = {
    namea: "Albania",
    nameb: "Brazil",
    namec: "Canada",
    named: "Denmark",
    namef: "Finland",
    nameg: "Germany",
    namei: "India",
    nameir: "Ireland",
    namem: "Madagascar",
    namen: "Nigeria",
    namep: "Portugal",
    namer: "Russia",
    names: "Spain",
    namess: "Sri Lanka",
    namet: "Thailand",
    nameuk: "United Kingdom",
    nameu: "Uruguay",
    namev: "Venezuala",
    namey: "Yemen",
    namez: "Zimbabwe"
}
const max_result =5;
const button = document.getElementById("myButton");
const searchBar = document.getElementById("searchbarCT");
const resultslist = document.getElementById("results");


function updateResults() {
    const searchValue = searchBar.value.toLowerCase();

    resultslist.innerHTML = "";
    if (searchValue.length > 20) {
        alert("Invalid input. Please enter a shorter search term.");
        
    }

    if (!searchValue) {
        alert("Invalid input. Please enter a search term.");
        return;
    }

    if (/\d/.test(searchValue)) {
        alert("Invalid input. Please enter a valid search term.");
    }


    let displayedresults = 0;
    const foundCountries = [];


for (const key in countries) {
    if (countries[key].toLowerCase().includes(searchValue)) {
        if (displayedresults >= max_result) {
            break;
        }
        const listItem = document.createElement("li");
        listItem.textContent = countries[key];
        resultslist.appendChild(listItem);
        foundCountries.push(countries[key]);
        displayedresults++;
    }
}

// Display the found countries in an alert
if (foundCountries.length > 0) {
    alert(`Found countries:\n${foundCountries.join("\n")}`);
} else {
    alert("No matching countries found.");
}
}

button.addEventListener("click", updateResults);

searchBar.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
    resultslist.innerHTML = "";
    updateResults();
}
});
}
let currencies = {
    namea: "ALL",
    nameb: "BRL",
    namec: "CAD",
    named: "DKK",
    namef: "EUR",
    nameg: "EUR",
    namei: "INR",
    nameir: "EUR",
    namem: "MGA",
    namen: "NGN",
    namep: "EUR",
    namer: "RUB",
    names: "EUR",
    namess: "LKR",
    namet: "THB",
    nameuk: "GBP",
    nameu: "UYU",
    namev: "VEF",
    namey: "YER",
    namez: "ZWD"

}
const max_resultcc = 5;
const enter = document.getElementById("myButtonCC");
const searchCurrencies = document.getElementById("searchbarCTCC");
const resultsCN = document.getElementById("resultsCC");

function updateCurrencies() {
    const searchvalCN = searchCurrencies.value.toUpperCase();
    resultsCN.innerHTML = "";
    if (searchvalCN.length !== 3) {
        alert("Invalid input. Please enter a three letter search term.");
    }
    if (!/^[A-Z]+$/.test(searchvalCN)) {
        alert("Invalid input. Please enter a valid search term.");
    }

    if (!searchvalCN) {
        alert("Invalid input. Please enter a search term.");
        return;
    }

    let displayedresultscc = 0;
    const foundCurrencies = [];
    
for (const key in currencies) {
    if (currencies[key].toUpperCase().includes(searchvalCN)) {
        if(displayedresultscc >= max_resultcc){
            break;
        }
        const listItemCN = document.createElement("li");
        listItemCN.textContent = currencies[key];
        resultsCN.appendChild(listItemCN);
        foundCurrencies.push(currencies[key]);
        displayedresultscc++;
    }
}
if (foundCurrencies.length > 0) {
    alert(`Found currencies:\n${foundCurrencies.join("\n")}`);
} else {
    alert("No matching currencies found.");
}
}

enter.addEventListener("click", updateCurrencies);

searchCurrencies.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        resultsCN.innerHTML = "";
        updateCurrencies();
    }
});