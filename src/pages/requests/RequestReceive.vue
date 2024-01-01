<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseSnipper from '../../components/ui/BaseSnipper.vue'

export default {
    components: {
        BaseCard,
        RequestItem,
        BaseSnipper
    },
    data() {
        return {
            isLoading: false,
            error: null
        }
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests']
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests']
        }
    },
    methods: {
        loadRequests() {
            this.isLoading = true

            try {
                this.$store.dispatch('requests/fetchRequests')
            } catch (err) {
                this.error = err.message || 'Something went wrong!'
            } finally {
                setTimeout(() => {
                    this.isLoading = false
                }, 1000)
            }
        }
    },
    created() {
        this.loadRequests()
    }
}
</script>

<template>
    <div>
        <section>
        <base-card>
            <header>
                <h2>Requests Received</h2>
            </header>

            <div v-if="isLoading && !hasRequests">
                <base-snipper></base-snipper>
            </div>
            <div v-else>
                <ul v-if="hasRequests">
                <request-item v-for="request in receivedRequests" :key="request" :email="request.userEmail"
                    :message="request.message"></request-item>
            </ul>
            <h3 v-else>You haven't received any requests yet</h3>
            </div>
        </base-card>
    </section>
    </div>
</template>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>