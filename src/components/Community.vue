<script setup>
import { computed, ref } from "vue";
import mbti_array from "../assets/mbti_array.json";
import { Input } from 'ant-design-vue';
import PostCard from "./PostCard.vue"
import postTestData from "../assets/postTestData.json"

const message = ref("");
const newPost = ref("");

const mbtiArray = mbti_array.mbti;
const colorArray = ref(new Array(mbtiArray.length));
colorArray.value.fill(false);

const { TextArea } = Input;

function searchMbti(index) {
  colorArray.value.fill(false);
  colorArray.value[index] = true;
  console.log(colorArray)
};


</script>


  
<template>
  <div class="community-flex-parent">
    <div class="community-flex-left">
      <p class="header">All community</p>
      <hr style="color: #D2CFCF;"/>

      <ul v-for="(mbti, index) in mbtiArray" :key="mbti">
        <li :class="colorArray[index]? 'active': 'inactive'" @click="searchMbti(index)"># {{ mbti }}</li>
      </ul>

    </div>
  
    <main>
      <div class="community-flex-right">
        <TextArea 
        class="top-box" 
        v-model="message" 
        placeholder="add multiple lines" 
        :rows="4"  
        show-count 
        :maxlength="100">
        </TextArea>
        <div class="buttom-box">
          <div v-for="(post, index) in postTestData" :key="index">
            <PostCard :postContent=post>
            </PostCard>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>
<style scoped>
body{
  overflow: hidden;
  height: 100vh;
}

ul{
  list-style-type: none;
  margin: 0.5em;
  padding: 0;
}

li{
  color: #858383;
  padding: 0.3rem;
}

.active {
  background-color: #802f22b4;
  border-radius: 8px;
  font-weight: 600;
  color: rgb(243, 237, 237);
}

.inactive {
}

@media (hover: hover) {
  li:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 8px;
  }
}

.community-flex-parent {
  display: flex;
  height: 100%;
}

/* left side bar: skin type tags */
.community-flex-left {
  /* background-color: #FFFFFF; */
  border-right:  1px solid #ededed;
  flex: 1 0 10%;
  padding: 0.5rem;
}

main{
  overflow-y: auto;
  width: 80%;
  margin-left: 1rem;
}

.community-flex-right {
  margin: 0px auto;
  display: flex;
  flex-direction: column;
}

.top-box {
  margin-right: 3rem;
  width: 80%;
  height: 10%;
}


.buttom-box{
  width: 80%;
  height: 90%;
  margin-top: 2rem;
  border-radius: 30px;
  border-style: solid;
  background-color: #FFFFFF;
  border-color: #D2CFCF;
  margin-right: 3rem;
}

.header {
  margin: 1rem;
  font: 14px "Fira Sans", sans-serif;
  color: #858383;
  font-weight: bold;
}

@media (max-width: 500px) {
  .community-flex-right {
    flex-direction: column-reverse;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
}
</style>
