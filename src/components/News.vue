<template>
  <div class="scrollable-container">
    <h2>Related Articles</h2>
    <div v-for="item in items" :key="item.id" class="scrollable-item">
      <div class="newsBox">
        <div class="image-container">
          <img :src="item.image_url" />
        </div>
        <div class="link-container">
          <a :href="item.link" target="_blank">{{ item.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import skinCancerNews from "../assets/skinCancerNews.jpg"
import mbtiExplain from "../assets/mbtiExplain.png"
import skinRoutineNews from "../assets/skinroutineNews.jpg"
import skinTalkNews from "../assets/skinTalkNews.jpg"

import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Skin Cancer', image_url: skinCancerNews, link: 'https://www.cancer.org.au/cancer-information/types-of-cancer/skin-cancer' },
  { id: 2, name: '16 Baumann Skin Types', image_url: mbtiExplain, link: 'https://skintypesolutions.com/blogs/skincare/16-baumann-skin-types' },
  { id: 3, name: 'Skin Routine', image_url: skinRoutineNews, link: 'https://www.healthline.com/health/beauty-skin-care/order-of-skin-care' },
  { id: 4, name: 'Skin Type Talks', image_url: skinTalkNews, link: 'https://www.youtube.com/playlist?list=PLpfTl28FExdkj-4Rz7KMIcjM5XPxAVDaO' }
])
</script>

<style scoped>
.scrollable-container {
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; 
  background-color: #782619;
  padding: 140px 20px; /* Add padding around the container */
}

.scrollable-item {
  display: inline-block; /* Align items horizontally */
  margin-right: 15px; /* Space between items */
  vertical-align: top; /* Align items to the top */
}

.newsBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
 padding-bottom: 20%;

  border-radius: 30px;
  background-color: #ffffff;
  width: 350px; 
  height: 400px;
}

.image-container {
  width: 100%;
  margin-bottom: 10px; /* Space between image and link */
}

.newsBox img {
  width: 350px; /* Adjust to fit within the container */
  height: 300px;
}

.link-container {
  text-align: center; /* Center the text */
}

.newsBox a {
  color: rgb(79, 95, 221);
  text-decoration: none; /* Remove underline from link */
  word-wrap: break-word; /* Ensure long words break and wrap */
}

.scrollable-container h2 {
  text-align: center; /* Center align text */
  color: #E69950; /* Set text color to yellow */
  font-weight: bold; 
  font-family: 'Times New Roman';
  font-size: 40px;
  margin-bottom: 7%;
}
</style>
