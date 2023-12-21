<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default {
    components: {
        CoachForm,
        BaseCard
    },
    methods: {
        //Get data from child component and dispatch to VueX:
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data)
            //Có thể sử dụng push | replace để navigate -> list coaches
            //Tuy nhiênm sử dụng push -> có thể quay lại trang form khi ấn 
            //back, còn replace thì không.
            this.$router.replace('/coaches')
        }
    }
}
</script>

<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>