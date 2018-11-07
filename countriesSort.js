
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

    addState(state){
        this.states.push(state);
    }

}

class State {
    constructor(name, cities){
        this.name = name;
        this.cities = cities;
    }

    addCity(city){
        this.states.push(city);
    }

}

class City{
    constructor(name, population){
        this.name = name;
        this.population = population;
    }
}

var d3 = require('d3-dsv');
var fs = require('fs');

var countriesCSV = fs.readFileSync("./countries.csv", "utf-8");
var test = d3.csvParse(countriesCSV);

console.log(test);

var countries = [];

function makeCountriesArray(csvObject){
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
 }


test.map(makeCountriesArray);

countries.sort(function(country1, country2){
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

/*console.log("Country Name | State Name | City Name | Population");
countries.map(function(country){
    country.states.map(function(state){
        state.cities.map(function(city){
            console.log(`${country.name} | ${state.name} | ${city.name} | ${city.population}`);
        })
        console.log("----------------------------------------");
    })
    console.log("++++++++++++++++++++++++++++++++++++++++++++++");
})*/