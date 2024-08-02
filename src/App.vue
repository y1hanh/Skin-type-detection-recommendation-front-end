<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const navbarClass = computed(() => {
  return route.path === '/' ? 'home-route' : 'other-route'
})
</script>

<template>
  <body>
    <div :class="navbarClass" class="navbar">
      <nav class="navbar-parent">
        <RouterLink to="/" active-class="active-link">HOME</RouterLink>
        <RouterLink to="/mbti" active-class="active-link">MBTI</RouterLink>
        <RouterLink to="/community" active-class="active-link">COMMUNITY</RouterLink>
      </nav>
      
      <span class="navbar-profile">
        <RouterLink to="/mbti">LOGIN |</RouterLink>
        <RouterLink to="/community">SIGNUP</RouterLink>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px 55px;
}

.home-route {
  background-color: #802F22;
  
}

.other-route {
  background-color: #F3E5D9;
}

.navbar-profile a {
  color:rgb(43, 43, 43);
}

.navbar-parent {
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: left;
  gap: 10px;
}

.navbar-parent a {
  color:rgb(43, 43, 43);
}
.navbar-parent .active-link {
  color: #b3b2b2; 
}
.mainbody {
  /* Add your styles here */
}
</style>
