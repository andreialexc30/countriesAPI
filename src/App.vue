<template>
<Header :fetchData="fetchData"
:valid="valid" />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
  <section class="countriesAPI_filters">
    <Filters :filterRegion="filterRegion" />
  </section>
  <section class="countriesAPI_displayed">
    <h1 v-if="ifCountry" class="countriesAPI_displayed--warning">Could not find the country you were looking for. Please try again.</h1>
    <CountryCard :modalData="modalData"
    :modalCountry="modalCountry"
    :sortedArray="sortedArray" />
  </section>
</template>

<script src="./js/app.js"></script>