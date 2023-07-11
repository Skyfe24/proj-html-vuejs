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

}

.navs {
    cursor: pointer;
}


.justify-between {
    justify-content: space-between;
}
</style>