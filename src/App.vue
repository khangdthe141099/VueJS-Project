<script setup>
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
    <TheHeader />
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}

.container {
    padding: 0 80px;
}
</style>