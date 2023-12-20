<script setup>
import { defineProps, ref, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseBadge from '../../components/ui/BaseBadge.vue';

//[INITIALIZE]
const selectedCoach = ref(null)
const props = defineProps(['id'])
const store = useStore();
const route = useRoute()

onBeforeMount(() => {
    const getCoachById = store.getters['coaches/getCoachById']
    selectedCoach.value = getCoachById(props?.id)
})

console.log('selectedCoach', selectedCoach);

const fullName = computed(() => {
    return selectedCoach?.value?.firstName + ' ' + selectedCoach?.value?.lastName
})

const rate = computed(() => {
    return selectedCoach?.value?.hourlyRate
})

const areas = computed(() => {
    return selectedCoach?.value?.areas
})

const description = computed(() => {
    return selectedCoach?.value?.description
})

const coachContactLink = computed(() => {
    return route.path + '/' + props.id + '/contact'
})



</script>

<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>

    <section>
        <base-card>
            <header>
                <h2>Interest? React out now!</h2>
                <base-button link :to="coachContactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>

    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>