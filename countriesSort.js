
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

var d3 = require('d3-dsv');
var fs = require('fs');

class Country {
    constructor(name, states){
        this.name = name;
        this.states = states;
    }

    //Merge takes care of merging the states and city arrays nested in the country objects
    //when two country objects are merged together
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

var countriesCSV = fs.readFileSync("./countries.csv", "utf-8");
var parsedCities = d3.csvParse(countriesCSV);

/*
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
 }*/

//We use map to turn our array of objects parsed from the csv
//into City objects nested within state objects nested within
//country objects grouped together in an array
var mappedCountries = parsedCities.map(function(csvObject){
    var newCity = new City(csvObject["City"], csvObject["Population"]);
    var cities = [newCity];
    var newState = new State(csvObject["State"], cities);
    var states = [newState];

    return new Country(csvObject["Country"], states);
});

//We use filter to turn merge all duplicate country objects (i.e. countries
//with the same name) and merge all duplicate state objects within each country
//object
var filteredCountries = mappedCountries.filter(function(country, iCountry){

    //use findIndex to check if the country already exists in the array
    var firstCountryIndex = mappedCountries.findIndex(function(findCountry){
        return findCountry.name == country.name;
    });

    //If it does exist, we want to merge the country objects together
    //and then return false so it doesn't get past the filter
    if (firstCountryIndex != iCountry){
        var foundCountry = mappedCountries[firstCountryIndex];
        foundCountry.merge(mappedCountries[iCountry]);
        return false;
    }
    //If not, this is the first instance of the country and so we leave
    //push it past the filter
    else
        return true;
});

//We will sort our countries array and each states array
//alphabetically by name, and each cities array numerically
//by population
filteredCountries.sort(function(country1, country2){

    //We are working our way inside out, sorting each
    //cities array in each of the states we are examining
    //and then sorting each of the states arrays and then
    //returning our comparison of country1 and country2
    //Notice that we are sorting both elements of the arrays
    //we are examining each time. This seems like overkill, but
    //if we only sort the first or second parameter we will
    //inevitably end up skipping something

    country1.states.sort(function(state1, state2){
        //Sort the cities array in state1 by population
        //in ascending order
        state1.cities.sort(function(city1,city2){
            return city1.population - city2.population;
        })
        //Now sort the cities in state2
        state2.cities.sort(function(city1,city2){
            return city1.population - city2.population;
        })
        //Sort the states alphabetically
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

//Print out each city in our Countries array
console.log("Country Name | State Name | City Name   | Population");
filteredCountries.map(function(country){
    country.states.map(function(state){
        state.cities.map(function(city){
            console.log(`${country.name}     | ${state.name}  | ${city.name} | ${city.population}`);
        })
        console.log("-------------+------------+-------------+-------------");
    })
    console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
})