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
    <div class="containerx flex">
        <div class="address">
            <h4 class="white"> {{ elementsFooter.title }}</h4>
            <div class="row ">
                <ul>
                    <li> {{ elementsFooter.street }} </li>
                    <li> {{ elementsFooter.number }} </li>
                    <li> {{ elementsFooter.email }} </li>



                </ul>
                <div class="social-icon">

                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>

                </div>
            </div>
        </div>
        <div class="row content-center w-100 gap-40">
            <div class="explore white">
                <h4> {{ elementsFooter.exploreSection }} </h4>
            </div>
            <ul>
                <li v-for="element in elementsFooter.explore" :key="element">
                    {{ element }}
                </li>
            </ul>



        </div>
        <div class="information white navs ">
            <h4> {{ elementsFooter.informationSection }} </h4>
            <ul>
                <li v-for="element in elementsFooter.information" :key="element">
                    {{ element }}
                </li>
            </ul>




        </div>
        <div class="otherinfos">
            <p>@2020 MaxMoach. All rights reserved</p>
        </div>

        <!-- GO UP -->
        <div class="up-up">
            <a href="#"><i class="fa-solid fa-arrow-right fa-rotate-270"></i></a>
        </div>

    </div>
</template>

<style scoped>
.containerx {
    color: #696969;
    background-color: rgb(15, 14, 26);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;


}

.h4 {
    margin-bottom: none;
}

ul {
    color: rgba(255, 255, 255, 0.733);
    list-style: none;
    font-size: 14px;
}

.up-up {
    width: 80px;
    height: 40px;
    border-radius: 50%;
    background-color: #20ad96;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;

}

.navs {
    cursor: pointer;
}

.white {
    color: white;
}

.flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

}
</style>