<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppHero from './components/AppHero.vue';
import { store } from "./data/store";

export default {

  components: {
    AppHeader, AppHero, AppMain, AppFooter
  },
  data() {
    return { store }
  },
  methods: {

  }
}

</script>

<template>
  <AppHeader :elements="store.headerNavs"></AppHeader>
  <AppHero> </AppHero>
  <AppMain> </AppMain>

  <AppFooter :elementsFooter="store.footerInfos"></AppFooter>
</template>


<style>
h3 {
  color: rgb(231, 65, 23)
}

li {

  text-transform: uppercase;
  text-decoration: none;


  color: rgb(253, 252, 252);
}
</style>