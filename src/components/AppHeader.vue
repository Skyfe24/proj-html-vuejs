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
        <ul class="menu"> </ul>
        <img :src="store.headerLogo" alt="">
        <i class="fa-solid fa-cart-shopping circle_container" style="color: #000000;">
            <span class="circle">0</span>
        </i>
    </div>
</template >


<style scoped>
h2 {
    color: rgb(233, 33, 6)
}

.container {
    background-color: rgb(44, 42, 42);

}

li {

    text-transform: uppercase;
    text-decoration: none;


    color: rgb(253, 252, 252);
}

.flex {
    display: flex;
    flex-direction: row;

}

.justify-between {
    justify-content: space-between;
}
</style>