<script>
import { store } from "../data/store";
export default {
    name: "AppMainSection3_Courses",
    data() {
        return { store }
    },
    props: {
        course1: Object,
        course2: Object,
        course3: Object,
    }
};
</script>

<template>
    <!-- COURSES SECTION -->
    <div class="join opac mt-5">JOIN MAXCOACH AT BEST</div>
    <div class="textcourses mb-5"> Latest Online <span class="watergreen">Courses</span> </div>
    <!-- CARD #1 -->
    <div class="container2">
        <div class="card"><img src="../assets/img/course-02-480x298.jpg" alt="">
            <p class="watergreen ms-4 mt-3 price"> {{ course1.price }} </p>
            <p class="description ms-4 mt-3"> {{ course1.subject }}</p>
            <p class="minitext ms-4 mt-3"> <i class="fa-solid fa-book"></i>&nbsp{{ course1.lessons }}&nbsp <i
                    class="fa-regular fa-user"></i> {{
                        course1.students }} </p>
        </div>
        <!-- CARD #2 -->
        <div class="card"><img src="../assets/img/stock-full-hd-03-480x298.jpg" alt="">
            <p class="watergreen ms-4 mt-3 price"> {{ course2.price }} </p>
            <p class="description ms-4 mt-3"> {{ course2.subject }}</p>
            <p class="minitext ms-4 mt-3"> <i class="fa-solid fa-book"></i>&nbsp{{ course2.lessons }}&nbsp <i
                    class="fa-regular fa-user"></i> {{
                        course2.students }} </p>
        </div>
        <!-- CARD #3 -->
        <div class="card"><img src="../assets/img/stock-full-hd-04-480x298.jpg" alt="">
            <p class="watergreen ms-4 mt-3 price"> {{ course3.price }} </p>
            <p class="description ms-4 mt-3"> {{ course3.subject }}</p>
            <p class="minitext ms-4 mt-3"> <i class="fa-solid fa-book"></i>&nbsp{{ course3.lessons }}&nbsp <i
                    class="fa-regular fa-user"></i> {{
                        course3.students }} </p>
        </div>




    </div>
    <!-- DOTS (USEFUL TO MAKE THE IMG CAROUSEL) -->
    <div class="dots-section">

        <i class="fa-solid fa-circle"></i>

        <i class="fa-solid fa-circle opac"></i>

        <i class="fa-solid fa-circle opac"></i>

        <i class="fa-solid fa-circle opac"></i>

        <i class="fa-solid fa-circle opac"></i>

    </div>
    <!-- LITTLE TEXT IN THE ENDING PART -->
    <div class="text dots-section"> <span class="opac">Control your personal preference settings to get notified about <br>
            appropriate courses. </span> <span class="boldy">View all courses &nbsp<i
                class="fa-solid fa-arrow-right"></i></span>
    </div>
    <img src="../assets/img/svg-1.svg" alt="" class="divide">
</template>

<style scoped>
.divide {
    filter: invert();
    width: 100vw;
}

img {
    max-height: 400px;

}

.dots-section {
    text-align: center;
    margin-top: 25px;
}

.boldy {
    font-weight: 700;
}

.opac {
    opacity: 0.5;
    margin-left: 15px;
    cursor: pointer;
}

.join {
    text-align: center;
    font-weight: 650;
}

.fa-circle {
    display: inline-block;
}

.textcourses {
    font-size: 38px;
    font-weight: 650;
    text-align: center;
}

.price {
    font-size: 28px;
    font-weight: 650;
}

.card {
    background-color: rgb(255, 255, 255);
    cursor: pointer;
}

.description {
    font-size: 19px;
    font-weight: 650;
}

.description:hover {
    color: #20ad96;
}

.minitext {
    opacity: 0.5;
}

h1 {
    font-size: 45px;
}

.container2 {
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;

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
</style>
