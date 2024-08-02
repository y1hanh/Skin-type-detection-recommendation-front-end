<script setup>
import { ref } from "vue";
import mbti_array from "../assets/mbti_array.json";
import { Input } from 'ant-design-vue';

function searchMbti() {
  console.log("clicked!")
};

const message = ref("");

const { TextArea } = Input;

</script>

<template>
<body class="community-flex-parent">
  <div class="community-flex-left">
    <p class="header">All community</p>
    <hr style="color: #D2CFCF;"/>
    <ul v-for="mbti in mbti_array.mbti" :key="mbti">
      <li @click="searchMbti" style="color: #858383;"># {{ mbti }} </li>
    </ul>
  </div>
  <div class="community-flex-right">
    <TextArea 
    class="top-box" 
    v-model="message" 
    placeholder="add multiple lines" 
    :rows="10"  
    :maxlength="6">
    </TextArea>
    <div class="button-box">
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
  border-radius: 30px;
  border-style: solid;
  background-color: #FFFFFF;
  border-color: #D2CFCF;
  margin-right: 3rem;
}

.top-box {
  flex-grow: 1;
  border-radius: 30px;
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

.button-box{
  flex-grow: 4;
  margin-top: 2rem;
  border-radius: 30px;
  border-style: solid;
  background-color: #FFFFFF;
  border-color: #D2CFCF;
  margin-right: 3rem;
}

.header {
  margin: 1rem;
  font: 1.3em "Fira Sans", sans-serif;
  color: #858383;
  font-weight: bold;
}
</style>