

<template>
    <div id="gayms">
        <Header />
        <div class="row gayms-container">
            <h1 class="heading ">
                Gayms
            </h1><br><br>
            <div class="gayms-grid row">
                <div class="item col" id="oldGame">
                    <img src="/img/clancyy.jpg"><br>
                    <button  @click="loadGame()" class="play btn">Play</button>
                </div>
                <div id="loadedGame" class="item col loadedGame">
                    <h1>this is the game</h1>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
    name: "Gayms",    
    components:{
        Header,
        Footer
    },
    methods: {
        loadGame(){
            document.getElementById("oldGame").style.display = "none"
            document.getElementById("loadedGame").style.display = "block"

        },
        /*
        initGame(){
            const socket = io.connect("ws://localhost:3000");
            socket.on("connection", () => {
                socket.io("Test")
            })
        }
        */
    

    }
}
</script>

<style scoped>
.loadedGame{
    display: none;
}


.gayms-container{
    display: flex;
    justify-content: center;
    background: var(--bg);
    margin: 20px;
    padding: 40px 10px;
    border-radius: 25px;
    opacity: 0.98;
}

.item{
    text-align: center;
    background: var(--ml-bg);
    border-radius: 25px;
    padding: 10px;
}

.item img{
    width: 100%;
    padding: 10px;
    border-radius: 25px;
    max-height: auto;
}

.play{
    background: var(--bg);
    color: white;
}

.heading{
    text-align: center;
    text-decoration: dashed underline var(--ml-bg);
    margin-bottom: 10px;
}

</style>