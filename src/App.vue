<script setup>
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
    <the-header />
    <div class="container">
        <!-- Slot props chứa all component được định nghĩa trong router.js -->
        <router-view v-slot="slotProps">
            <!-- Transition name: là tiền tố để css cho các class transition -->
            <!-- Muốn có transition all component phải đc bọc bởi thẻ div -->
            <transition name="route" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
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

/* BEGIN TRANSITION CSS */
.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.route-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-active {
    transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0)
}

/* END TRANSITION CSS */
</style>