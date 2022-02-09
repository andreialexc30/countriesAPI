<template>
    <header class="countriesAPI_header">
        <h1 class="countriesAPI_header--title">countriesAPI <span class="credits">built by Andrei Caia</span></h1>
        <form class="countriesAPI_header--form">
            <input type="text" placeholder="Type in country, code or capital" class="countriesAPI_form--search">
            <button type="submit" @click.prevent="fetchData" class="countriesAPI_form--btn">Search</button>
            <select name="filter" id="filterSearch" class="countriesAPI_form--filter">
                <option value="name">Name</option>
                <option value="code">Code</option>
                <option value="capital">Capital</option>
            </select>
             <p v-if="valid">You did not type in anything or something went wrong.</p>
        </form>
    </header>
</template>

<script src="../js/search.js"></script>