<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'
//[INITIALIZE]
const store = useStore();

//[COMPUTED]
const filteredCoaches = computed(() => store.getters['coaches/coaches'])
const hasCoaches = computed(() => store.getters['coaches/hasCoaches'])


</script>
<template>
    <section>
        FILTER
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register a coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in filteredCoaches" :key="coach">
                {{ coach.firstName }}
            </li>
        </ul>
        <h3 v-else>No coach found</h3>

    </section>
</template>

