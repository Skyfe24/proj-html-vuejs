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
    <div class="text"> Latest Online Courses </div>

    <div class="container2">
        <div class="card"><img src="../assets/img/course-02-480x298.jpg" alt="">
            <p class="watergreen ms-4 mt-3 price"> {{ course1.price }} </p>
            <p class="description ms-4 mt-3"> {{ course1.subject }}</p>
            <p class="minitext ms-4 mt-3"> <i class="fa-solid fa-book"></i>&nbsp{{ course1.lessons }}&nbsp <i
                    class="fa-regular fa-user"></i> {{
                        course1.students }} </p>
        </div>
        <div class="card"><img src="../assets/img/stock-full-hd-03-480x298.jpg" alt="">
            <p class="watergreen ms-4 mt-3 price"> {{ course2.price }} </p>
            <p class="description ms-4 mt-3"> {{ course2.subject }}</p>
            <p class="minitext ms-4 mt-3"> <i class="fa-solid fa-book"></i>&nbsp{{ course2.lessons }}&nbsp <i
                    class="fa-regular fa-user"></i> {{
                        course2.students }} </p>
        </div>
        <div class="card"><img src="../assets/img/stock-full-hd-04-480x298.jpg" alt="">
            <p class="watergreen ms-4 mt-3 price"> {{ course3.price }} </p>
            <p class="description ms-4 mt-3"> {{ course3.subject }}</p>
            <p class="minitext ms-4 mt-3"> <i class="fa-solid fa-book"></i>&nbsp{{ course3.lessons }}&nbsp <i
                    class="fa-regular fa-user"></i> {{
                        course3.students }} </p>
        </div>




    </div>
    <div class="dots-section">

        <i class="fa-solid fa-circle"></i>

        <i class="fa-solid fa-circle opac"></i>

        <i class="fa-solid fa-circle opac"></i>

        <i class="fa-solid fa-circle opac"></i>

        <i class="fa-solid fa-circle opac"></i>

    </div>
    <div class="text"> Control your personal preference settings to get notified ab,out appropriate courses. View all
        courses </div>
</template>

<style scoped>
img {
    max-height: 400px;

}

.dots-section {
    text-align: center;
    margin-top: 25px;
}

.opac {
    opacity: 0.4;
    margin-left: 15px;
    cursor: pointer;
}

.fa-circle {
    display: inline-block;
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

.textstats {
    margin-right: 150px;
    margin-left: 25px;
    text-align: center;

}


.darkgrey {
    color: rgb(80, 72, 72);

}

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

.container2x {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 80px;

    margin-right: 30px;

}

.container3 {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: -170px;
    position: relative;
}

.textpart {
    margin-right: 300px;
    margin-left: 200px;
    position: relative;
    left: 80px;
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
