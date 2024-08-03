<style scoped>
img{width: 40%; }
.mbtiExplainMain h1{
    text-align: center; /* Center align text */
  color: #E69950; /* Set text color to yellow */
  font-weight: bold; 
  font-family: 'Times New Roman';
  font-size: 40px;
}

.mbtiExplainMain img{
    margin: 7% 0%;
}
.mbtiExplainMain{
    display: flex;
    flex-direction: column;
    padding: 0px 100px;
  gap: 5%;
  width: 100%;
  margin: 7% 0%;}

  ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px; /* Adjust spacing between items */
  font-size: 16px; /* Adjust font size */
  line-height: 1.6; /* Adjust line height for readability */
  font-family: 'Courier New', Courier, monospace;
  font-size: 23px;
}
.mbtiExplainContent img {
  cursor: url('../assets/colorPicker.png'), auto; 
}

/* Add a fallback for debugging purposes */
.mbtiExplainContent img:hover {
  cursor: url('../assets/colorPicker.png'), auto; 
}
.mbtiExplainContent {
  display: flex;
  align-items: flex-start; /* Align items to the start */
  gap: 10%; /* Space between image and list */
  align-items: center;
}

.mbtiExplainRightSide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

<template>
    <main class="mbtiExplainMain">
      <h1>What exactly is skin MBTI?</h1>
      <div class="mbtiExplainContent">
        <img src="../assets/mbtiExplain.png" alt="image" />
        <div class="mbtiExplainRightSide">
          <ul>
            <li>D = Dehydration or Dry Skin</li>
            <li>O = Oily Skin or Normal Skin</li>
            <li>S = Sensitive Skin </li><li > R = Resistant Skin</li>
            <li>P = Uneven Skin Pigment (dark spots on face)  </li><li > N = No Dark Spots</li>
            <li>W = Wrinkle-prone  </li><li > T = Tight Unwrinkled Skin & Healthy Habits</li>
          </ul>
          <Button @click="router.push('/explanation')" style="width: 100px;">Learn more</Button>
      </div>
      </div>
    </main>
  </template>
  

<script setup>
import { Button } from 'ant-design-vue';
import {useRouter} from 'vue-router';


const router = useRouter();
</script>