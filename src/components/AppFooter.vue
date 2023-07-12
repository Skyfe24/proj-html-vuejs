<script>
import { store } from "../data/store";
export default {
    name: "AppFooter",
    data() {
        return { store }
    },
    props: {
        elementsFooter: Object
    }
};
</script>

<template>
    <div class="containerx gap-5">
        <!-- ADDRESS SECTION  -->
        <div class="address">
            <h4 class="white"> {{ elementsFooter.title }}</h4>
            <div class="row ">
                <ul>
                    <li> {{ elementsFooter.street }} </li>
                    <li> {{ elementsFooter.number }} </li>
                    <li> {{ elementsFooter.email }} </li>



                </ul>
                <div class="social-icon">

                    <i class="fa-brands fa-facebook selector"></i>
                    <i class="fa-brands fa-instagram selector"></i>
                    <i class="fa-brands fa-twitter selector"></i>
                    <i class="fa-brands fa-linkedin selector"></i>

                </div>
            </div>
        </div>
        <!-- EXPLORE SECTION  -->
        <div class="explo">
            <div class="explore white">
                <h4> {{ elementsFooter.exploreSection }} </h4>
            </div>

            <div v-for="element in elementsFooter.explore" :key="element" class="selector">
                {{ element }}
            </div>




        </div><!-- INFORMATION SECTION  -->
        <div class="information  navs ">
            <h4 class="white"> {{ elementsFooter.informationSection }} </h4>

            <div v-for="element in elementsFooter.information" :key="element" class="selector">
                {{ element }}
            </div>





        </div>


    </div>
    <!-- CREDITS  -->
    <div class="otherinfos">
        <p class="pt-5">@2020 MaxMoach. All rights reserved</p>
        <!-- GO UP BUTTON  -->
        <div class="up-up navs">
            <a href="#"><i class="fa-solid fa-arrow-right fa-rotate-270"></i></a>
        </div>
    </div>

    <!-- GO UP BUTTON  -->
</template>

<style scoped>
.containerx {
    color: #696969;
    background-color: rgb(15, 14, 26);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

}

.fa-brands {
    margin-right: 10px;
}

.social-icon {
    margin-right: 160px;
}

.otherinfos {
    background-color: rgb(15, 14, 26);
    text-align: center;
    color: aliceblue;
}

.h4 {
    margin-bottom: none;
}

ul {
    list-style: none;
    font-size: 14px;
}

.up-up {
    width: 60px;
    height: 40px;
    border-radius: 50%;
    background-color: #20ad96;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    position: relative;
    left: 1700px;
    top: -20px;
    cursor: pointer;

}

.selector:hover {
    color: #20ad96
}

.explo {
    position: relative;
    top: 20px;
    cursor: pointer;
}

.navs {
    cursor: pointer;
}

.white {
    color: white;
}

li {
    color: grey;
}
</style>