
/*

var countries = [
    {
        name:"countryName",
        states:[
            {
                name:"stateName",
                cites:[
                    {
                        name:"cityName",
                        population: 0
                    }
                ]
            }
        ]
    }
]
*/

class Country {
    constructor(name, states){
        this.name = name;
        this.states = states;
    }

    merge(country){
        this.states = this.states.concat(country.states);
    }

}

class State {
    constructor(name, cities){
        this.name = name;
        this.cities = cities;
    }

    merge(state){
        this.cities = this.cities.concat(state.cities);
    }

}

class City{
    constructor(name, population){
        this.name = name;
        this.population = population;
    }
}

var country1 = new Country ("USA", ["CA"])
var country2 = new Country ("USA", ["ID"])

var country3 = new Country ("USA", ["NV"])
var country4 = new Country ("UK", ["CA"])
var country5 = new Country ("UK", ["ID"])

var country6 = new Country ("UK", ["NV"])
var countries = [country1, country2,country3,country4, country5,country6];

var fcountries = countries.filter(function(element, index){
    var firstCountryIndex = countries.findIndex(function(findCountry){
        return findCountry.name == element.name;
    });

    if(firstCountryIndex != index){
        countries[firstCountryIndex].merge(countries[index]);
        return false;
    }
    else
        return true;
})

console.log(fcountries);
var d3 = require('d3-dsv');
var fs = require('fs');

var countriesCSV = fs.readFileSync("./countries.csv", "utf-8");
var parsedCities = d3.csvParse(countriesCSV);

/*function makeCountriesArray(csvObject){
    var countryName = csvObject["Country"];
    var stateName = csvObject["State"];
    var cityName = csvObject["City"]
    var population = csvObject["Population"];
  

    var iCountry = countries.findIndex(function(element){
        return element.name == countryName;
    });
    
    if ( iCountry < 0){
       var newCity = new City(cityName, population);
       var cities = [newCity];
       var newState = new State(stateName, cities);
       var states = [newState];
       var newCountry = new Country(countryName, states);

       countries.push(newCountry);
    }

    else{
            var country = countries[iCountry];
            var iState = country.states.findIndex(function(element){
                return element.name == stateName;
        });

        if (iState < 0){
            var newCity = new City(cityName, population);
            var cities = [newCity];
            var newState = new State(stateName, cities);
            country.states.push(newState);
        }
        else{
            var state = country.states[iState];
            var newCity = new City(cityName, population);
            state.cities.push(newCity);
        }
    }






 }*/


var mappedCountries = parsedCities.map(function(csvObject){
    var newCity = new City(csvObject["City"], csvObject["Population"]);
    var cities = [newCity];
    var newState = new State(csvObject["State"], cities);
    var states = [newState];

    return new Country(csvObject["Country"], states);
});


var filteredCountries = mappedCountries.filter(function(country, iCountry){

    //use findIndex to check if the country already exists in the array
    var firstCountryIndex = mappedCountries.findIndex(function(findCountry){
        return findCountry.name == country.name;
    });

    //If it does exist, we want to merge the country objects together
    if (firstCountryIndex < 0)
    console.log("Something weird is going on.");
    if (firstCountryIndex != iCountry){
        console.log("don't match");
        mappedCountries[firstCountryIndex].merge(mappedCountries[iCountry]);
        return false;
    }
    else
        return true;
});

filteredCountries.sort(function(country1, country2){
    country1.states.sort(function(state1, state2){
        state1.cities.sort(function(city1,city2){
            return city1.population - city2.population;
        })
        state2.cities.sort(function(city1,city2){
            return city1.population - city2.population;
        })
        if(state1.name < state2.name) return -1;
        else return 1;
    })
    country2.states.sort(function(state1, state2){
        state1.cities.sort(function(city1,city2){
            return city1.population - city2.population;
        })
        state2.cities.sort(function(city1,city2){
            return city1.population - city2.population;
        })
        if(state1.name < state2.name) return -1;
        else return 1;
    })
    if(country1.name < country2.name) return -1;
    else return 1;
})

console.log("Country Name | State Name | City Name | Population");
filteredCountries.map(function(country){
    country.states.map(function(state){
        state.cities.map(function(city){
            console.log(`${country.name} | ${state.name} | ${city.name} | ${city.population}`);
        })
    })
    console.log("++++++++++++++++++++++++++++++++++++++++++++++");
})