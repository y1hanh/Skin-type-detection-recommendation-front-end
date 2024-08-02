<template>
    <div class="scrollable-container">
        <h2>Related Articles</h2>
      <div v-for="item in items" :key="item.id" class="scrollable-item">
        <img :src="item.image_url" />{{ item.name }}
      </div>
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Sample data
  const items = ref([
    { id: 1, name: 'Item 1', image_url:'../assets/skinCancerNews.png' },
    { id: 2, name: 'Item 2', image_url:'' },
    { id: 3, name: 'Item 3', image_url:'' },
    { id: 4, name: 'Item 4', image_url:'' },
    { id: 5, name: 'Item 5', image_url:'' },
    // Add more items as needed
  ])
  </script>
  
  <style scoped>
  .scrollable-container {
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent line breaks */
    padding: 40px; 
    background-color: #782619;
  }
  
  .scrollable-item {
    display: inline-block; /* Align items horizontally */
    width: 200px; /* Adjust as needed */
    height: 100px; /* Adjust as needed */
    margin-right: 10px; /* Space between items */
    background-color: #f0f0f0; /* Optional: for visual distinction */
    text-align: center; /* Optional: center text inside items */
    line-height: 100px; /* Optional: vertically center text */
    margin: 20px 8px; 
  }

  .scrollable-container h2 {
  font-size: 2.1em; 
  font-family:Jim Nightshade;
  font-style: italic;
  color: #E69247;
}
  </style>
  