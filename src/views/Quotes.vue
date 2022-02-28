<template>
  <div id="home row">
    <Header />
    <br />
    <div class="quote-div">
      <h1 class="col">Submit A Quote!</h1>
      <br />
      <span class="sub-heading"
        >Submit a quote to be displayed in our discord server under the channel;
        #cult-quotes, please note random nonsense is not allowed</span
      ><br />
      <span class="err">{{ err }}</span>
      <span class="res">{{ res }}</span>
      <form
        @submit.prevent="preventRefresh"
        class="row"
        id="send-quote"
        action="/quote"
        method="POST"
      >
        <input
          placeholder="quote"
          name="quote"
          type="text"
          required
          class="col-2 test form-control"
        />
        <input
          placeholder="author"
          name="author"
          type="text"
          required
          class="col test form-control"
        /><br />
        <button type="sumbit" class="btn form-btn">Submit</button>
      </form>
      <br />
      <div class="rules">
        <span class="notice"
          ><span class="icon">*</span> Please keep the spam to a minimal</span
        ><br />
        <span class="notice"
          ><span class="icon">*</span> All forms of nonsense is allowed as long
          as it makes sense</span
        ><br />
        <span class="notice"
          ><span class="icon">*</span> All quotes saved are sent at random so
          dont worry if yours doesn't show up right away</span
        ><br />
        <span class="notice"
          ><span class="icon">*</span> @here and @everyone will be filtered out
          so don't even try it</span
        ><br />
        <span class="notice"
          ><span class="icon">*</span> Spam Results in a rate limit</span
        ><br />
        <span class="notice"
          ><span class="icon">*</span> All of this is thanks to Mike's post nut
          clarity oh and also Ave Valefar</span
        >
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Quote",
  components: {
    Header,
    Footer,
  },
  mounted() {
    document.title = "Quotes | MLand";
  },
  data() {
    return {
      err: "",
      res: "",
    };
  },
  methods: {
    preventRefresh(e) {
      e.preventDefault();
      let quote = document.querySelector("input[name=quote]").value;
      let author = document.querySelector("input[name=author]").value;
      console.log(quote, author);
      console.log(quote.length);
      if (quote.length > 2000 || author.length > 2000) {
        this.err = " Error:  Quote Cannot contain text over 2000 characters";
      } else {
        this.err = "";
        fetch("/quote", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            quote: quote,
            author: author,
          }),
        }).then(async (response) => {
          if (response.status == 200) {
            this.err = "";
            this.res = "Submission Sucessfully added";
            let quote2 = document.querySelector("input[name=quote]");
            let author2 = document.querySelector("input[name=author]");
            quote2.value = "";
            author2.value = "";
          } else {
            this.res = "";
            this.err =
              "An unexpected error occured please be sure to read the guidelines";
          }
          const data = response;
          return data;
        });
      }
    },
  },
};
</script>

<style scoped>
.err {
  color: red;
}

h1 {
  text-align: center;
  margin: 10px;
  text-decoration: underline;
  text-decoration-color: var(--ml-bg);
}
.form-control {
  background: var(--ml-bg);
  width: 90%;
  border: none;
}

.form-control:focus-visible {
  background-color: var(--bg-alt);
  color: var(--fg);
}

.form-control:focus {
  box-shadow: none;
}
.col {
  width: 100%;
}
.test {
  margin: 2px;
}
form {
  width: 90%;
  margin: 10px 2.5%;
}

.btn {
  background: var(--bg);
  color: var(--fg);
}

.btn:hover {
  background: var(--ml-bg);
  color: var(--bg);
}

.quote-div {
  background: #181818;
  border-radius: 5px;
  margin: 40px;
  padding: 40px;
  margin-bottom: 10%;
}

.notice {
  padding: 20px;
}

span.sub-heading {
  display: flex;
  justify-content: center;
}

::placeholder {
  color: var(--bg);
  opacity: 1;
}

.icon {
  color: var(--ml-bg);
}

.res {
  color: lime;
}

@media screen and (max-width: 600px) {
  body {
    scale: 0.5;
  }
  span {
    font-size: 0.75rem;
  }
  .quote-div {
    margin: 2px;
    padding: 5px;
  }
  .notice {
    padding: 20px 0;
    overflow-x: scroll;
  }
}
</style>
