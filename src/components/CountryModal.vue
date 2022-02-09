<template>
    <article class="countriesAPI_Country--modal">
        <div class="countriesAPI_Country--modal-flag">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png" alt="Romania" class="countriesAPI_Country--modal-img">
        </div>
        <h1 class="countriesAPI_Country--name">{{ modalCountry.name }}, <span class="countriesAPI_Country--name-code">RO</span></h1>
        <h2 class="countriesAPI_Country--capital">Bucharest</h2>
        <h3 class="countriesAPI_Country--region">Europe</h3>
        <h4 class="countriesAPI_Country--neighbors">Neighbors: <span></span></h4>
        <ul class="countriesAPI_Country--otherDetails">
            <li class="countriesAPI_Country--otherDetails-item">Population, <span></span></li>
            <li class="countriesAPI_Country--otherDetails-item">LatLng: <span></span></li>
            <li class="countriesAPI_Country--otherDetails-item">Area, <span></span></li>
            <li class="countriesAPI_Country--otherDetails-item">Time Zone, <span></span></li>
            <li class="countriesAPI_Country--otherDetails-item">Currencies: <span></span></li>
            <li class="countriesAPI_Country--otherDetails-item">Official Languages: <span></span></li>
        </ul>
        <button @click="showModal" class="countriesAPI_Country--modal-close">X</button>
    </article>
</template>

<script>
    export default {
        props: ['showModal', 'sortedArray', 'modalCountry']
    }
</script>