<template>
    <div id="utilities">
        <Header />
        <div id="util-container" class="row">
            <div id="util-menu" class="col-2">
                <button class="btn menu-btn active">Ip Address Lookup</button><br>
                <button class="btn menu-btn">Ip Address Lookup</button><br>
                <button class="btn menu-btn">Ip Address Lookup</button><br>
                <button class="btn menu-btn">Ip Address Lookup</button><br>
            </div>
            <div id="util-area" class="col">
                <div class="menu-item active-menu">
                    <h2>Ip address Lookup</h2>
                    <span>Insert and ip In the menu input below and we'll return the results</span><br><br>
                    <span class="error">{{err}}</span>
                    <div id="ip-results" class="row">
                        <div class="col">
                            <span id="ip-address">Ip Address: {{ip}}</span><br><br>
                            <span id="ip-country">Country: {{country}}</span><br><br>
                            <span id="ip-City">City: {{city}}</span><br><br>
                            <span id="ip-Postal">Postal: {{postal}}</span><br><br>
                        </div>
                        <div class="col">
                            <span id="ip-latitude">Latitude: {{lat}}</span><br><br>
                            <span id="ip-longitude">Longitude: {{lon}}</span><br><br>
                            <span id="ip-provider">Provider: {{provider}}</span><br><br>
                            <span id="ip-timezone">Timezone: {{tz}}</span><br><br>
                        </div>
                    </div><br>
                    <input type="text"  placeholder="127.0.0.1" class="form-control " id="ip-input"><br>
                    <button @click="sendIpData()" class="btn menu-active-btn">Lookup</button>
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
    name: "Utils",
    
    components:{
        Header,
        Footer
    },

    data(){
        return {
            err: "",
            ip: "",
            country: "",
            city: "",
            postal: ""
                
        }
    },

    methods: {
        async sendIpData() {
            let ipAddr =document.getElementById("ip-input").value;
            let ipLen = ipAddr.length
            if (ipAddr === ""){
                this.err = "IP ADDRESS CANNOT BE BLANK"
                return
            }
            
            if(14 >= ipLen && ipLen >= 6){
                this.err = ""
                await fetch("/utilities/ip", {
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json" 
                    },
                    body: JSON.stringify({
                        "ip": ipAddr
                    })
                }).then(response => response.json()).then(data => {
                    this.ip = data.ip
                    this.country = data.country;
                    this.city = data.city;
                    this.postal = data.postal
                    this.provider = data.org
                    this.tz = data.timezone
                    this.lat = data.latitude
                    this.lon = data.longitude
                } )
                /*
                this.ip = lookup.data.ip;
                this.country = lookup.data.country;
                this.city = lookup.data.city;
                this.postal = lookup.data.postal
                */
                

                
            }
            else{
                this.err = "IP address is invalid"
                return
            }

        }

    },

    mounted(){
        document.title = "MisaLand | Utilities"
    
    }
}
</script>

<style scoped>

#ip-input{
    background: var(--ml-bg);
    border: none;
    color: var(--bg);
}



#ip-results{
    text-align: left;
    background: var(--bg-alt);
    padding: 10px;
    border-radius: 25px;
}


#util-container{
    background-color: var(--bg);
    color: var(--fg);
    padding: 50px 0;
    margin: 15% 20px;
    border-radius: 25px;
    opacity: 0.98;
}



.menu-btn{
    color: var(--fg);
}

.menu-btn:hover{
    background: var(--ml-bg);
    color: var(--bg);
}

.active{
    background: var(--ml-bg);
}

.menu-active-btn{
    background: var(--ml-bg);
    color: var(--fg);
}

.active-menu{
    text-align: center;
    display: block;
}

.error{
    color: red;
}

</style>