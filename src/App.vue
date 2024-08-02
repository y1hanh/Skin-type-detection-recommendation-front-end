<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <div class="navbar">
      <nav class="navbar-parent">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mbti">MBTI</RouterLink>
        <RouterLink to="/community">Community</RouterLink>
      </nav>

      <span>
        <img 
        alt="user profile" 
        class="navbar-profile" 
        src="./components/icons/kuromi.png" 
        width="45" height="45" />
      </span>

    </div>
    <RouterView class="mainbody"/>
  </body>
</template>

<style scoped>
body {
  display: flex;
  flex-direction:  column;
}

.navbar {
  display: flex;
  flex-direction:  row;
  justify-content: space-between;
}

.navbar-parent {
  display: flex;
  width: 50%;
  flex-direction:  row;
  justify-content: space-between;
}

img {
  border-radius: 50%;
}
</style>
