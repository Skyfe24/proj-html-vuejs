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

                <!--<a href="#" class="class"> <i class="fa-solid fa-chevron-down active-menu"
                        style="color: #000000; width: 2px; "></i></a></li> -->


                <div class="dropdown-content">

                    <ul>
                        <div class="dropdown show">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[0] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[1] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[2] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[3] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[4] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[5] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[6] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[7] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[8] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[9] }} </a>
                                <a class="dropdown-item" href="#">{{ store.dropdowncontents[10] }} </a>
                            </div>
                        </div>
                        <!--  <li v-for="dropdownContent in store.dropdowncontents" :key="dropdown - content">
                            <a href="#"> {{ dropdownContent }} </a>
                        </li> -->



                    </ul>




                </div>
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
.btn-secondary {
    --bs-btn-color: none;
    --bs-btn-bg: none;
    --bs-btn-border-color: none;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #5c636a;
    --bs-btn-hover-border-color: #565e64;
    --bs-btn-focus-shadow-rgb: 130, 138, 145;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #565e64;
    --bs-btn-active-border-color: #51585e;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #6c757d;
    --bs-btn-disabled-border-color: #6c757d;
}

.btn-secondary:hover {
    background-color: #20ad96;
}

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



.active-menu {
    display: inline block;
    margin-right: 30px;
}

.active-menu:hover {
    color: #20ad96;
}

.justify-between {
    justify-content: space-between;
}
</style>