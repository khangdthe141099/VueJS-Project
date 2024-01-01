<script setup>
import { useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseSnipper from '../../components/ui/BaseSnipper.vue'
import BaseDialog from '../../components/ui/BaseDialog.vue';

//[INITIALIZE]
const store = useStore();
const activeFilters = ref({
    frontend: true,
    backend: true,
    career: true
})
const isLoading = ref(false)
const error = ref(null)

//[COMPUTED]
const filteredCoaches = computed(() => {
    const coaches = store.getters['coaches/coaches'] //List coaches

    return coaches.filter((coach) => {
        if (activeFilters.value.frontend && coach.areas.includes('frontend')) {
            return true
        }

        if (activeFilters.value.backend && coach.areas.includes('backend')) {
            return true
        }

        if (activeFilters.value.career && coach.areas.includes('career')) {
            return true
        }

        return false
    })
}) //List coach
const hasCoaches = computed(() => store.getters['coaches/hasCoaches']) //Has coach condition
const isCoach = computed(() => store.getters['coaches/isCoach'])

//[METHOD]:
const setFilters = (updatedFilter) => {
    activeFilters.value = updatedFilter
}

const loadCoaches = async () => {
    isLoading.value = true

    try {
        await store.dispatch('coaches/loadCoaches')
    } catch (err) {
        error.value = err.message || 'Something went wrong!'
    } finally {
        setTimeout(() => {
            isLoading.value = false
        }, 1000)
    }
}

const handleError = () => {
    error.value = null
}

const resetFilter = () => {
    activeFilters.value = {
        frontend: true,
        backend: true,
        career: true
    }

    loadCoaches()
}

onMounted(() => {
    loadCoaches()
})

</script>

<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <coach-filter @change-filter="setFilters" :active-filters="activeFilters"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline" @click="resetFilter">Refresh</base-button>
                    <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
                </div>
                <div v-if="isLoading">
                    <base-snipper></base-snipper>
                </div>
                <ul v-if="hasCoaches && !isLoading">
                    <coach-item v-for="coach in filteredCoaches" :key="coach" :coach="coach"></coach-item>
                </ul>
                <h3 v-if="!hasCoaches && !isLoading">No coaches found.</h3>
            </base-card>
        </section>
    </div>
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

