<template>
    <div class="footer">
        Damon Raffels <span>@</span> {{ currYear }}
    </div>
</template>

<script>
export default {
    name: 'FooterComp',

    data() {
        return {
            currYear: new Date().getFullYear()
        }
    },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Iceland&family=Lexend+Zetta:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display&display=swap");

.footer {
    text-align: center;
    font-family: 'Iceland', sans-serif;
    color: #B97D10;
}
span{
    color: #67c7eb;
}
</style>