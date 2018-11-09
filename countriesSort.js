
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
        this.states = this.states.filter(function(state, iState,self){
            var firstIndex = self.findIndex(function(findState){
                return findState.name == state.name;
            })

            if (firstIndex != iState){
                this.states[firstIndex].cities = this.states[firstIndex].cities.concat(this.states[iState].cities);
                return false;
            }
            else
                return true;
            
        }, this);
    }

}

class State {
    constructor(name, cities){
        this.name = name;
        this.cities = cities;
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
    if (firstCountryIndex != iCountry){
        var foundCountry = mappedCountries[firstCountryIndex];
        foundCountry.merge(mappedCountries[iCountry]);
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


console.log("Country Name | State Name | City Name   | Population");
filteredCountries.map(function(country){
    country.states.map(function(state){
        state.cities.map(function(city){
            console.log(`${country.name}     | ${state.name}  | ${city.name} | ${city.population}`);
        })
        console.log("-------------+------------+-------------+-------------");
    })
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
})