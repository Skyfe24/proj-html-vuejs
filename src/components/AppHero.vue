<script>
import { store } from "../data/store";
export default {
    name: "AppHero",
    data() {
        return { store }
    },
    props: {
        elements: Object
    }
};
</script>
 <!-- HERO IMAGE + TEXT -->
<template>
    <img src="../assets/img/home-3-hero-bg.jpg" alt="" class="hero">
    <div class="herotext"> Commence Business <br>
        <h1>Distant Mentoring Program</h1><br>
        <button class="btn-white watergreen navs"> Download free guidebook <i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>  

<style scoped>
h1 {
    font-size: 75px;
}

.btn-white:hover {
    background-color: #20ad96;
    color: white;
}

.container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 90%;
    position: relative;
}

.container2 {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

}

.container3 {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;

}

.textpart {
    margin-right: 300px;
}

.hero {
    max-height: 600px;
    width: 100vw;
    margin-top: 15px;
}

.herotext {
    text-align: center;
    position: relative;
    top: -385px;
    left: 47px;
    color: white;
}

.btn-white {
    background-color: white;
    border: none;
    border-radius: 8%;
    padding: 20px;
    font-weight: 800;
    padding-left: 50px;
    padding-right: 50px;


}


.watergreen {
    color: #20ad96;
}

li {
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;

}

.navs {
    cursor: pointer;
}
</style>