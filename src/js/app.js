import Header from '../components/Header.vue'
import CountryCard from '../components/CountryCard.vue'
import Filters from '../components/Filters.vue'

export default {
    components: { Header, CountryCard, Filters },
    name: 'App',
    data() {
        return {
            ifCountry: false,
            valid: false,
            allCountries: [],
            modalCountry: {}
        }
    },
    mounted() {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
            .then((response) => {
                if(!response.ok) {
                    throw new Error('There was an error attempting to fetch the data' + response.status)
                }

                return response.json();
            }).then((countryData) => {
               this.populateArray(countryData)
            })
    },
    computed: {
        sortedArray: function() {
            function compare(a, b) {
                if(a.name < b.name) {
                    return -1
                }
                if(a.name > b.name) {
                    return 1
                }

                return 0
            }

            return this.allCountries.sort(compare)
        }
    },
    methods: {
        filterRegion() {
            const region = document.getElementById('countryRegion')
            const regionOption = region.options[region.selectedIndex].value
            const sortedCountries = new Array();

            if(sortedCountries.length === 0) {
                this.allCountries.forEach((country) => {
                    if(country.region === regionOption) {
                        sortedCountries.push(country)
                    }
                })
            }

            this.allCountries.splice(0, this.allCountries.length, ...sortedCountries)
            console.log(sortedCountries)
            console.log(this.allCountries)
        },
        fetchData() {
            const searchInput = document.querySelector('.countriesAPI_form--search')
            let validInput = searchInput.value
            if(validInput.length === 0) {
                this.valid = !this.valid
                return
            }
            let endpoint = validInput.toLowerCase().trim()

            const getSelection = document.getElementById('filterSearch')
            let selectedOption = getSelection.options[getSelection.selectedIndex].text.toLowerCase();
            this.allCountries = new Array();
            if(validInput && selectedOption !== 'code') {
                fetch(`https://restcountries.com/v3.1/${selectedOption}/${endpoint}`)
                    .then((response) => {
                        if(!response.ok) {
                            this.ifCountry = !this.ifCountry
                            throw new Error('There was an error attempting to fetch the data' + response.status)
                        }

                        return response.json();
                    }).then((filteredData) => {
                        this.populateArray(filteredData)
                    })
            }

            if(validInput && selectedOption === 'code') {
                fetch(`https://restcountries.com/v3.1/alpha/${endpoint}`)
                .then((response) => {
                    if(!response.ok) {
                        this.ifCountry = !this.ifCountry
                        throw new Error('There was an error attempting to fetch the data' + response.status)
                    }

                    return response.json();
                }).then((codeData) => {
                    this.populateArray(codeData)
                })
            }
        },
        modalData() {
            fetch('https://restcountries.com/v3.1/all')
                .then((response) => {
                    if(!response.ok) {
                        throw new Error('There was a problem fetching the data' + response.status)
                    }

                    return response.json();
                }).then((countryData) => {
                    countryData.forEach((country) => {
                        this.modalCountry = {
                            flag: country.flags.png,
                            name: country.name.common,
                            capital: country.capital,
                            region: country.region,
                            pop: country.population,
                            code: country.cca2,
                            lat: country.latlng[0],
                            lng: country.latlng[1],
                            area: country.area,
                            timezone: country.timezones[0],
                            neighbors: country.borders,
                            currencies: country.currencies,
                            languages: country.languages
                        }
                    })
                })
        },
        populateArray(array) {
            for(let i = 0; i < array.length; i++) {
                let country = {
                    flag: array[i].flags.png,
                    name: array[i].name.common,
                    capital: array[i].capital,
                    region: array[i].region,
                    pop: array[i].population
                }

                this.allCountries.push(country)
            }
        }
    }
}