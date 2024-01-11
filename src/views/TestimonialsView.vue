<template lang="">
    <div class="testimonials" v-if="testimonials">
        <div class="ed-card" v-for="test in testimonials" :key="test.name">
                <div class="card-header">
                    <h3 class="Name">
                        {{ test.name }}
                    </h3>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        },
    },
    mounted() {
        this.$store.dispatch('fetchtestimonials')
    }
}
</script>



<style></style>