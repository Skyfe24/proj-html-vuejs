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
    <div class="container gap-5">
        <ul class="menu container l-h">
            <div class="navs links " v-for="element in elements" :key="elements">





                <div class="active-menu">{{ element }}</div>
                <a href="#" class="class"> <i class="fa-solid fa-chevron-down active-menu"
                        style="color: #000000; width: 2px; ;"></i></a>
            </div>

        </ul>
        <img :src="store.headerLogo" alt="" class="logo">
        <!-- ICONA CARRELLO -->
        <i class="fa-solid fa-cart-shopping circle_container navs" style="color: #000000;">
            <div class="circle-container">
                <span class="circle">0</span>
            </div>
        </i>
        <!-- ICONA PROFILO UTENTE -->
        <i class="fa-regular fa-circle-user navs" style="color: #000000;"></i>
        <div class="input-group rounded">
            <input type="search" class="form-control rounded navs" placeholder="Search..." aria-label="Search"
                aria-describedby="search-addon" />
            <span class="input-group-text border-0 navs" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
        </div>
    </div>
</template >


<style scoped>
h1 {
    font-size: 45px;
}

.l-h {
    line-height: 20px;
}

.fas.fa-search {
    color: #20ad96;
    padding: 10px;
}

.input-group-text {
    background-color: rgb(248, 247, 247);
    border-style: none;
}

.fa-solid {
    width: 5px;
    display: inline-block
}

.form-control {
    background-color: rgb(248, 247, 247);
    border-style: none;
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

.links {
    list-style: none;
    color: rgb(27, 26, 26);
}

.container2 {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

}

.circle-container {
    position: relative;
}

.circle {
    position: absolute;
    top: -28px;
    right: -28px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    background: #20ad96;
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-weight: 800;
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
    margin-right: 95px;

}

.navs {
    cursor: pointer;
}

.div.navs.links {}

.active-menu {
    display: inline block;
    margin-right: 30px;
}

.justify-between {
    justify-content: space-between;
}
</style>