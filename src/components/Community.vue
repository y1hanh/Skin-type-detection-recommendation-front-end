<script setup>
import mbti_array from "../assets/mbti_array.json"
</script>

<template>
<body class="community-flex-parent">
  <div class="community-flex-left">
    <p class="header">All community</p>
    <hr style="color: #D2CFCF;"/>
    <ul v-for="mbti in mbti_array.mbti" :key="mbti">
      <li># {{ mbti }} </li>
    </ul>
  </div>
  <div class="community-flex-right">
    <div class="top-box">
      Make a new post
    </div>
    <div class="button-box">
      Check out the posts!
    </div>
  </div>
</body>
</template>

<style scoped>
ul{
  list-style-type: none;
  margin: 0.5em;
  padding: 0;
}
.community-flex-parent {
  display: flex;
  flex-direction: row;
}
.community-flex-left {
  flex-grow: 1;
  border-radius: 8%;
  border-style: solid;
  background-color: #FFFFFF;
  border-color: #D2CFCF;
  margin-right: 3rem;
}
.community-flex-right {
  flex-grow: 5;
  display: flex;
  flex-direction: column;
}

.top-box {
  flex-grow: 1;
}
.button-box{
  flex-grow: 4;
}

.header {
  margin: 1rem;
  font: 1.3em "Fira Sans", sans-serif;
  color: #858383;
  font-weight: bold;
}
</style>