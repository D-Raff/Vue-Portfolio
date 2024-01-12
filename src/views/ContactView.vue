<template>
    <div class="Contact">
        <div class="c-info" v-if="Contact">
            <form action="https://formspree.io/f/xleqdjnr" method="POST">
                <label>
                    <span>Your full Name:</span>
                    <input type="text" name="name">
                </label>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email">
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
            <div class="jarv-container">
                <div class="stat circ"></div>
                <div class="outerm circ"></div>
                <div class="out circ"></div>
                <div class="mid circ"></div>
                <div class="mid2 circ"></div>
                <div class="mid3 circ"></div>
                <div class="in circ"></div>
                <div class="inmost3 circ"></div>
                <div class="inmost2 circ"></div>
                <div class="inmost circ"></div>
            </div>
            <div class="contact-me">
                <h2>Contact Me</h2>
                <span>Phone: 0827881888</span>
                <span>Email: damonraffels@gmail.com</span>
                <span>GitHub:</span>
                <span>Instagram:</span>
                <span>LinkedIn:</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        Contact() {
            return this.$store.state.Contact
        },
    },
    mounted() {
        this.$store.dispatch('fetchContact')
    }
}
</script>

<style scoped>
.Contact{
    min-height: 80vh;
    width: 100vw;
    margin-top: 5em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.c-info {
    display: flex;
    justify-content: center;
    align-items: center;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid #0088ff;
    border-radius: 10px;
    height: 400px;
    width: 300px;
    gap: 3em;
    z-index: 1;
    position: relative;
    right: 50%;
    animation: glow 1s ease-in 3s 1 forwards;
    box-shadow: 0px 0px 8px 2px #7bc9e6;
}
.contact-me{
    border: #0088ff 3px solid;
    z-index: 1;
    height: 400px;
    width: 300px;
    animation: glow 1s ease-in 3s 1 forwards;
}

label {
    display: flex;
    flex-direction: column;
    color: #B97D10;
}

:is(input, textarea){
    border: #B97D10 3px solid;
    border-radius: 10px;
    background: #AA0505;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

}
form button {
    width: 50px;
    border: #B97D10 3px solid;
    border-radius: 30%;
    background: #AA0505;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.jarv-container {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
}

.circ {
    border-radius: 50%;
    aspect-ratio: 1/1;
    position: absolute;
}

.stat {
    height: 80%;
    border: 25px solid #0088ff;
}

.outerm {
    width: 30%;
    border: 20px solid rgba(0, 0, 0, 0);
    border-bottom: 20px solid #0088ff;
    border-left: 20px solid #0088ff;
    animation: jarv 5s linear infinite;
}

.out {
    width: 29.5%;
    border: 10px solid #0088ff;
}

.mid {
    width: 20%;
    border: 32px solid rgba(0, 0, 0, 0);
    border-bottom: 32px solid #005aa8;
    animation: jarv2 3.5s linear infinite reverse;
}

.mid2 {
    width: 20%;
    border: 20px solid rgba(0, 0, 0, 0);
    border-top: 20px solid #005aa8;
    border-right: 20px solid #005aa8;
    animation: jarv 3.5s linear infinite reverse;
}

.mid3 {
    width: 20px;
    border: 172px solid rgba(0, 0, 0, 0);
    border-top: 172px solid #0088ff4b;
    border-right: 172px solid #0088ff4b;
    animation: jarv 3.5s linear infinite reverse;
}

.in {
    width: 11%;
    border: 10px solid #0088ff;
    border-bottom: 5px solid #00000000;
    rotate: 45deg;
    animation: jarv2 2s linear infinite;
}

.inmost3 {
    width: 35px;
    background: #0088ff;
}

.inmost2 {
    width: 80px;
    border: 13px solid #0088ff;

}

.inmost {
    width: 8%;
    border: 26px solid #0088ff;
    border-top: 26px solid #00000000;
    border-bottom: 26px solid #00000000;
    animation: jarv 1s linear infinite reverse;
}

@keyframes jarv {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes jarv2 {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}
</style>