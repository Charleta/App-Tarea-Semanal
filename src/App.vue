<template>
  <div class="app">
    <menu-superior></menu-superior>
    <router-view></router-view>
  </div>
  <footer-section></footer-section>
</template>

<script>


import FooterSection from './components/FooterSection.vue';
import MenuSuperior from './components/MenuSuperior.vue';

export default {
  components: {
    FooterSection,
    MenuSuperior,
  },
  
};
</script>

<style>
.app {
  margin: 20px;
}
.navbar {
  height: 100px;
  
}
footer {
   margin: 20px;
   border-radius:20px;
}



</style>
