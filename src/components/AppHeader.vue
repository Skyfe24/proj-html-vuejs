<script>
import { store } from "../data/store";
export default {
    name: "AppHeader",
    data() {
        return { store }
    },
    props: {
        elements: Object
    }
};

</script>
<template>
    <div class="container">
        <ul class="menu container">
            <div class="navs" v-for="element in elements" :key="elements">
                {{ element }}



            </div>
            <a class="active-menu" href="#">{{ element }}</a>
            <a href="#" class="class"></a>

        </ul>
        <img :src="store.headerLogo" alt="" class="logo">
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </div>
        <i class="fa-solid fa-ghost"></i>
    </div>

    <img src="../assets/img/home-3-hero-bg.jpg" alt="" class="hero">
    <div class="herotext"> Commence Business <br>
        <h1>Distant Mentoring Program</h1><br>
        <button class="btn-white"> Download free guidebook -></button>
    </div>

    <div class="container2">
        <div class="text"> Learn about our Work Culture at MaxCoach</div>
        <img src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="">

    </div>

    <div class="container2">
        <div class="text"> 129+ , 80, 4% </div>
    </div>
    <div class="container2">

        <img src="../assets/img/stock-full-hd-11-670x450.jpg" alt="">
        <div class="text"> Upgrade Your Skills Upgrade Your Life</div>
    </div>
    <div class="text"> Latest Online Courses </div>

    <div class="container2">
        <img src="../assets/img/stock-full-hd-03-480x298.jpg" alt="">
        <img src="../assets/img/stock-full-hd-03-480x298.jpg" alt="">
        <img src="../assets/img/stock-full-hd-06-480x298.jpg" alt="">

    </div>
    <div class="text"> Control your personal preference settings to get notified ab,out appropriate courses. View all
        courses </div>
</template >


<style scoped>
h1 {
    font-size: 45px;
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

.hero {
    max-height: 500px;
    width: 100vw;
}

.herotext {
    text-align: center;
    position: relative;
    top: -315px;
    left: 47px;
    color: white;
}

.btn-white {
    background-color: white;
    border: none;
    border-radius: 7%;
    padding: 20px;
    color: #20ad96;
    font-weight: 800;
}

li {
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;

}

.logo {
    width: 30%;

}

.navs {
    cursor: pointer;
}


.justify-between {
    justify-content: space-between;
}
</style>