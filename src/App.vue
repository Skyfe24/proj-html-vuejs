<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from "./data/store";

export default {

  components: {
    AppHeader, AppMain, AppFooter
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

.container {
  background-color: rgb(44, 42, 42);

}
</style>