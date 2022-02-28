<template>
  <div class="header">
    <h1 class="logo">MLand</h1>
    <div class="dropdown">
      <button class="btn"><i class="fas fa-bars"></i></button>
      <div class="header-links">
        <a href="/" class="link">Home</a>
        <hr />
        <a href="/quotes" class="link">Quotes</a>
        <hr />
        <a href="https://discord.gg/pCMmxmr85V" target="_blank" class="link"
          >JoinUs</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background: var(--ml-bg);
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
}
h1 {
  font-family: "Patrick Hand", cursive;
  font-size: 3rem;
}

.right {
  float: right;
}

.link {
  text-decoration: none;
  color: var(--fg);
  margin: 10px 8px;
}
.fa-bars {
  font-size: 2rem;
}
.btn {
  margin: 8px 0;
  color: var(--fg);
}

.btn:hover {
  color: var(--bg);
}
.header-links {
  background: var(--ml-bg);
  box-shadow: -5px -5px 10px black;
  display: none;
  border-radius: 2px;
  position: absolute;
  color: var(--fg);
  z-index: 1;
  right: 0;
  padding: 0 10px;
  text-align: center;
  background: var();
}

hr {
  padding: 0px auto;
  margin: 1px auto;
}

.header-links a {
  display: block;
}

.header-links a:hover {
  color: var(--bg);
}

.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown:hover .header-links {
  display: block;
}

@media screen and (max-width: 600px) {
  .header {
    width: 110%;
  }
}
</style>
