<template>
    <div class="Contact">
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
        <div class="c-info container" v-if="Contact">
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
            <div class="contact-me">
                <h2>Contact Me</h2>
                <span><a href="damonraffels@gmail.com"><img src="https://i.ibb.co/Gv3pK5H/email-14-512.png" alt="icon"> damonraffels@gmail.com</a></span>
                <span><img src="https://i.ibb.co/PwXZJpW/whatsapp-512.png" alt="icon"> 0827881888</span>
                <span><a href="https://github.com/D-Raff"><img src="https://i.ibb.co/YpJdk0b/github-mark-white.png" alt="icon">GitHub</a></span>
                <span><a href="https://www.linkedin.com/in/damonraffels"><img src="https://i.ibb.co/9nWVPKv/kisspng-computer-icons-linkedin-5aff0283e54964-1704227815266617639392.png" alt="icon"> LinkedIn</a></span>
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
.Contact {
    min-height: 80vh;
    width: 100vw;
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.c-info {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid #0088ff;
    border-radius: 10px;
    min-height: 400px;
    width: 290px;
    gap: 3em;
    animation: glow 3s ease-in infinite;
}

.contact-me {
    border: #0088ff 3px solid;
    border-radius: 10px;
    height: 400px;
    width: 290px;
    animation: glow 3s ease-in infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
.contact-me span{
    align-self: flex-start;
    margin-left: 60px;
}

label {
    display: flex;
    flex-direction: column;
    color: #B97D10;
}

:is(input, textarea) {
    border: #B97D10 3px solid;
    border-radius: 10px;
    background: #AA0505;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #67C7EB

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
    color: #67C7EB;
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
    animation: fade 3s ;
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

h2 {
    font-family: iceland;
    font-size: 40px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

span {
    color: #7bc9e6;

}

span a {
    text-decoration: none;
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
@keyframes glow {
    50%{
        box-shadow: inset 0px 0px 10px 2px #7bc9e6;
    }
}

</style>