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
    <div class="container">
        <div class="address">
            <h4 class="white"> {{ elementsFooter.title }}</h4>
            <div class="row">
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
        <div class="otherinfos"></div>






    </div>
</template>

<style scoped>
.container {
    color: #696969;
    background-color: rgb(15, 14, 26);
    margin: 0 auto;
}

.white {
    color: white;
}
</style>