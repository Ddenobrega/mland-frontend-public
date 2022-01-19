<template >
    <div id="mod" class="row">
    <Header />
    <br>
    <div class="quote-div">
    <h1 class="col">Mod Application</h1><br>
    <span class="sub-heading">We don't really ask for much so put alot of thought into what youre about to say</span>
    <span class="err">{{err}}</span>
    <span class="res">{{res}}</span>
    <form @submit.prevent="preventRefresh" class="row" id="send-quote" action="" method="POST">
        <input placeholder="username" name="username" type="text" required class="form-child form-control"><br><br>
        <textarea placeholder="Why do you want to be mod and what would you bring to the table as a moderator?" class="form-child" name="Description"></textarea>
        <button type="sumbit" class="btn form-child form-btn">Submit</button>
    </form>
    <br> <div class="rules"> </div> </div>
    <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: "Mod Applications",   
    components: {
        Header, 
        Footer
    },
    methods :{
        preventRefresh(e){
            e.preventDefault();
            var username = document.querySelector("input[name=username]").value
            var description = document.querySelector("textarea[name=Description]").value
            var url = "/staff/mod"
            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body:{
                    username: username,
                    description: description

                }

            }).then(response => response).then(data => console.log(data))
        }
    },

}
</script>

<style scoped>
    .form-child{
        margin: 10px;
    }
    .quote-div{
        background: var(--bg);
        padding: 20px;
        width: 90%;
        margin: 7% 50px;
    }

    .form-control{
        width: 95%;
    }

    textarea{
        width: 95%;
        min-height: 100px;
    }
    .btn{
        background: var(--ml-bg);
        width: 95%;
    }

    .btn:hover{
        background: var(--bg);
        color: white;

    }

</style>