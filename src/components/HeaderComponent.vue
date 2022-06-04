<template>
  <header>
    <div class="logo-container">
      <router-link class="logo" to="/">
        <img src="../assets/img/logo.svg" alt="logo">
        Three Dots
      </router-link>
    </div>
    <nav>
      <ul class="nav-links">
        <li><router-link class="nav-link" to="/specs">Specs</router-link></li>
        <li><router-link class="nav-link" to="/products">Products</router-link></li>
        <li><router-link class="nav-link" to="/about">About</router-link></li>
      </ul>
    </nav>
    <div class="cart">
      <img src="../assets/img/cart.svg" alt="cart">
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}

</script>

<style scoped>

header {
  display: flex;
  width: 90%;
  margin: auto;
  height: 10vh;
  align-items: center;
}
.logo-container, 
.nav-links, 
.cart {
  display: flex;
}
.logo-container {
  flex: 1;
}
.logo {
  font-weight: 500;
  margin: 5px;
  text-decoration: none;
  display: flex;
}
nav {
  flex: 2;
}
.nav-links {
  justify-content: space-around;
  list-style: none;
}
.nav-link {
  text-decoration: none;
}

.cart {
  flex: 1;
  justify-content: flex-end;
}



</style>