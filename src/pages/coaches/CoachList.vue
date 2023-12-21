<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

//[INITIALIZE]
const store = useStore();
const activeFilters = ref({
  frontend: true,
  backend: true,
  career: true
})

//[COMPUTED]
const filteredCoaches = computed(() => {
  const coaches = store.getters['coaches/coaches']

  return coaches.filter((coach) => {
    if(activeFilters.value.frontend && coach.areas.includes('frontend')) {
      return true
    }

    if(activeFilters.value.backend && coach.areas.includes('backend')) {
      return true
    }
    
    if(activeFilters.value.career && coach.areas.includes('career')) {
      return true
    }

    return false
  })
}) //List coach
const hasCoaches = computed(() => store.getters['coaches/hasCoaches']) //Has coach condition

//[METHOD]:
const setFilters = (updatedFilter) => {
  activeFilters.value = updatedFilter
}

console.log('filteredCoaches', filteredCoaches);

</script>

<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach" :coach="coach"></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

