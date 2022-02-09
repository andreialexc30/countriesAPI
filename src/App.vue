<template>
<Header :fetchData="fetchData"
:valid="valid" />
  <section class="countriesAPI_filters">
    <Filters :filterRegion="filterRegion" />
  </section>
  <section class="countriesAPI_displayed">
    <h1 v-if="ifCountry" class="countriesAPI_displayed--warning">Could not find the country you were looking for. Please try again.</h1>
    <ul class="countriesAPI_displayed--list">
        <CountryCard :modalData="modalData"
        :modalCountry="modalCountry"
        :sortedArray="sortedArray" />
    </ul>
  </section>
</template>

<script src="./js/app.js"></script>