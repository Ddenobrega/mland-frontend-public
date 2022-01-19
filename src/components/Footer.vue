<template>
    <div class="footer-container">
        <div class="footer row">
            <div class="footer-heading footer-1 col">
                <h2>About us</h2>
                <a href="#">Events</a><br>
                <a href="#">Website</a><br>
                <a href="#">Services</a><br>
                <a href="#">Community</a><br>
            </div>
            <div class="footer-heading footer-2 col">
                <h2>Need Help?</h2>
                <a href="#">Support</a><br>
                <a href="#">Server Bot</a><br>
                <a href="#">Report a Problem</a><br>
            </div>
            <div class="footer-heading footer-3 col">
                <h2>Contact Us</h2>                
                <a href="#">Insights</a><br>
                <a href="#">Sponsorships</a><br>
                <a href="/staff/applications">Mod Applications</a><br>
            </div>
            <div class="footer-heading footer-4 col">
                <h2>Social Media</h2>
                <a href="#">Hackthebox</a><br>
                <a href="#">Github</a><br>
                <a href="#">Instagram</a><br>
                <a href="#">Youtube</a><br>
                <a href="#">Discord</a><br>
                <a href="#">Twitter</a><br>
            </div>
            <div class="footer-email-form col">
                <h2>Wanna play a game?</h2>
                
                <!-- <input type="text" class="form-control col" placeholder="Enter your username" id="footer-text"> -->
                <button @click="this.$router.push('gayms')" class="btn col">Play</button><br><br>
                <h2>Skid Utilities</h2>
                <button @click="this.$router.push('utils')" class="btn col">Use</button><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props:{
        score: {
            type: String
        }
    }
}
</script>

<style scoped>

.btn{
    background: var(--bg);
    color: var(--fg);
    margin: 0;
    padding: 0 20px;
}

input#footer-text-btn.col.btn{
    padding: 0;
    width: fit-content;
}


.btn:hover{
    color: var(--ml-bg);
}

.form-control{
    background: var(--bg);
    border: none;
}

.footer{
    background: var(--ml-bg);
    position: relative;
    padding: 8px;
    overflow-y: scroll;
    margin-top: 40%;
    text-align: center;
    font-family: 'Patrick Hand', cursive;
    display: flex;
}

.footer-heading h2{
    text-decoration: dashed underline;
    text-decoration-color: var(--bg);
}

.footer-heading a{
    text-decoration: none;
    color: var(--fg);
}

.footer-heading a:hover{
    color: var(--bg);
}

/*
.footer-container {
    background-color: var(--ml-bg);  
    opacity: 0.9;
    padding: 4rem 0 2rem 0;
}

.footer {
    text-align: center;
    width: 80%;
    height: 40vh;
    background-color: var(--ml-bg);
    color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
}

.footer-heading {
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
}

.footer-heading h2 {
    margin-bottom: 2rem;
}

.footer-heading a {
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
}

.footer-heading a:hover {
    color:pink;
    transition: 0.3s ease-out;
}

.footer-email-form h2 {
    margin-bottom: 2rem;
}

#footer-email {
    width: 250px;
    height: 40px;
    border-radius: 4px;
    outline: none;
    border: none;
    padding-left: 0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
}

#footer-email::placeholder {
    color: purple;
}

#footer-email-btn {
    text-align: center;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    background-color: lightpink;
    outline: none;
    border: none;
    color: purple;
    font-size: 1rem;
}

#footer-email-btn:hover {
    cursor: pointer;
    background-color: blueviolet;
    transition: all 0.4s ease-out;
}



@media screen and (max-width: 720px) {
    .footer-3 {
        display: none;
    }
    .footer-email-form {
        margin-top: 2rem;
    }
}

*/
    @media screen and (max-width: 600px) {
        .footer{
            width: 110%;
            overflow-x: hidden;
        }
        
    }
</style>