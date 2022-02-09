<template>
        <article v-for="country in sortedArray" :key="country.code" class="countriesAPI_displayed--Country">
            <h2 class="countriesAPI_Country--name">{{ country.name }}</h2>
            <div @click="showModal" class="countriesAPI_Country--wrapper">
                <div class="countriesAPI_Country--flag">
                    <img :src="country.flag" alt="" class="countriesAPI_Country--flag-img">
                </div>
                <h3 class="countriesAPI_Country--capital" v-for="capital in country.capital">{{ capital }}</h3>
                <ul class="countriesAPI_Country--details">
                    <li class="countriesAPI_Country--details-item">Region: <span class="countriesAPI_details--region">{{ country.region }}</span></li>
                    <li class="countriesAPI_Country--details-item">Population: <span class="countriesAPI_details--population">{{ country.pop }}</span></li>
                </ul>
            </div>
        </article>
        <CountryModal :showModal="showModal"
        :sortedArray="sortedArray"
        :modalCountry="modalCountry"
        v-if="openModal" />
</template>

<script>
    import CountryModal from './CountryModal.vue'

    export default {
        components: { CountryModal },
        props: ['sortedArray', 'modalData', 'modalCountry'],
        name: 'CountryCard',
        data() {
            return {
                openModal: false,
                hideCards: false,
            }
        },
        methods: {
            showModal() {
                this.openModal = !this.openModal
            },
        }
    }
</script>