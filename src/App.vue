<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMainSection1 from './components/AppMainSection1.vue';
import AppMainSection2 from './components/AppMainSection2.vue';
import AppMainSection3_Courses from './components/AppMainSection3_Courses.vue';
import AppFooter from './components/AppFooter.vue';
import AppHero from './components/AppHero.vue';
import { store } from "./data/store";


export default {

  components: {
    AppHeader, AppHero, AppMainSection1, AppMainSection2, AppMainSection3_Courses, AppFooter
  },
  data() {
    return { store }
  },
  methods: {

  }
}

</script>

<template>
  <div class="all">
    <AppHeader :elements="store.headerNavs"></AppHeader>
    <AppHero> </AppHero>
    <AppMainSection1> </AppMainSection1>
    <AppMainSection2> </AppMainSection2>
    <AppMainSection3_Courses :course1="store.course1" :course2="store.course2" :course3="store.course3">
    </AppMainSection3_Courses>
    <AppMain> </AppMain>

    <AppFooter :elementsFooter="store.footerInfos"></AppFooter>
  </div>
</template>


<style>
h3 {
  color: rgb(231, 65, 23)
}

.all {
  background-color: rgb(240, 241, 241);
}

li {

  text-transform: uppercase;
  text-decoration: none;


  color: rgb(253, 252, 252);
}
</style>