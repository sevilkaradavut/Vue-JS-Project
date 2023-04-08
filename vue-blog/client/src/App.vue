<template>
  <div id="app">
    <div class="block">
      <h1 class="title">VUEJS BLOG</h1>
      <p class="subtitle">An example of Vue Js</p>
    </div>

    <router-view />
  </div>
</template>

<style scoped>
.block {
  max-width: 600 px;
  margin: 0 auto;
  text-align: center;

}

.title {
  font-family: 'Lobster';
  font-size: 45px;
}

.subtitle {
  margin: 0px;
  font-family: 'Lobster';
}
</style>
