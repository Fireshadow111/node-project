<template>
    <nav class="navbar navbar-expand-lg sticky-top ">
        <div class="container-fluid">
            <router-link to="/">
                <img class="img-fluid" src="https://i.ibb.co/gSP0hng/NEXT-removebg-preview-1.png" alt="logo" loading="lazy">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase ">
                    <li class="nav-item">
                        <router-link class="nav-link " to="/"> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link " to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products"> Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin"> Admin</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
  
<script>
export default {

}
</script>
  
<style ></style>
  