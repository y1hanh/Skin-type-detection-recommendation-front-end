<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const navbarClass = computed(() => {
  return route.path === '/' ?  'home-route':'other-route'  
})
</script>

<template>
  <body>
    <div :class="navbarClass" class="navbar">
      <nav class="navbar-parent">
        <RouterLink to="/" active-class="active-link">HOME</RouterLink>
        <RouterLink to="/mbti" active-class="active-link">Skin Test</RouterLink>
        <RouterLink to="/explanation" active-class="active-link">Skin Types</RouterLink>
        <RouterLink to="/community" active-class="active-link">COMMUNITY</RouterLink>
      </nav>

      <span class="navbar-website-title">
        <img src="./components/icons/web-logo.png" alt="Skin MBTI">
      </span>
      
      <span class="navbar-profile">
        <RouterLink to="/mbti">LOGIN |</RouterLink>
        <RouterLink to="/community">SIGNUP</RouterLink>
      <!--
      <span>
        <img 
          alt="user profile" 
          class="navbar-profile" 
          src="./components/icons/kuromi.png" 
          width="45" height="45" />
      </span>
      -->
      </span>
    </div>
    <RouterView class="mainbody"/>
  </body>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
}

.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 55px;
  z-index: 9999; 
  align-items: center;
}



.home-route {
  background-color: #802F22;
}

.other-route {
  background-color: #F3E5D9;
}

.navbar-website-title {
  flex: 1;
  text-align: center;
}

.navbar-profile {
  flex: 1;
  text-align: end;
}

.navbar-profile a {
  color:rgb(30, 30, 30);
}

.navbar-parent {
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 10px;
  flex:1
}

.navbar-parent a {
  color:rgb(30, 30, 30);
}

.navbar-parent .active-link {
  color: #b3b2b2; 
  font-weight: 700;
}

.other-route .active-link {
  color:rgb(30, 30, 30);
  font-weight: 700;
}
</style>
