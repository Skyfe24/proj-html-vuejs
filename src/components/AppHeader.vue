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
            <div v-for="element in elements" :key="element">
                <li> {{ store.headerNavs[1] }} </li>
                <li>{{ elements[1] }}</li>{{ elements[2] }}<li>{{ elements[3] }}</li>


            </div>
            <a class="active-menu" href="#">{{ element }}</a>
            <a href="#" class="class"></a>

        </ul>
        <img :src="store.headerLogo" alt="" class="logo">

        <i class="fa-solid fa-ghost"></i>
    </div>

    <img src="../assets/img/home-3-hero-bg.jpg" alt="" class="hero">
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
h2 {
    color: rgb(233, 33, 6)
}

.container {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 90%;

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



.justify-between {
    justify-content: space-between;
}
</style>