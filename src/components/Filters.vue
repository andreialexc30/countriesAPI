<template>
    <select @click.prevent="filterRegion" name="Region" id="countryRegion" class="countriesAPI_filter">
        <option>Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">North America</option>
        <option value="Americas">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
    <select name="Pop. range" id="countryPop" class="countriesAPI_filter">
        <option>Population</option>
    </select>
    <select name="Languages" id="countryLang" class="countriesAPI_filter">
        <option>Language</option>
    </select>
    <select name="Time zone" id="countryTime" class="countriesAPI_filter">
        <option>Time Zone</option>
    </select>
    <select name="Currencies" id="countryCurrency" class="countriesAPI_filter">
        <option>Currency</option>
    </select>
</template>

<script>
    export default {
        props: ['filterRegion']
    }
</script>