<template>
  <div>
    <div class="parent">
      <h2>Scan Your SkinMBTI here</h2>
      <div class="image-container">
        <img src="../assets/kuromi_full.png" alt="Kuromi Image" />
      </div>
      <div class="button-container">
        <div class="camera-container">
          <img src="../components/icons/camera.png" alt="Camera Icon" class="camera-icon" />
        </div>
        <button class="upload-button" @click="handleUpload">Upload</button>
      </div>
    </div>
    <div class="next-button-container">
      <button v-if="uploadClicked" class="next-button" @click="showNextSection">▼</button>
    </div>
    
    
    <div v-if="nextSectionVisible" ref="nextSection">
      <Survey></Survey>
    </div>
  </div>
</template>

<script>

import Survey from "./Survey.vue"
export default {
  data() {
    return {
      uploadClicked: false, // Initially hide the next button
      nextSectionVisible: false // Initially hide the next section
    }
  },
  methods: {
    handleUpload() {
      this.uploadClicked = true; 
    },
    showNextSection() {
      this.nextSectionVisible = true; 
      window.scrollBy(0, 200);
    }
  }
}
</script>

<style scoped>
.parent h2{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.parent {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 40px 20px;
  background-color: #f9f9f9;
  width: 80%;
  max-width: 400px; 
 align-items: center;
 margin-top: 3%;

}

.image-container {
  border: 2px solid #000;
  border-radius: 20px;
  margin-bottom: 40px ;
  margin-top: 5px;
}

img {
  width: 100%; /* Adjust to fit within the box */
  max-width: 300px; /* Adjust as needed */
  border-radius: 8px; /* Optional: Add rounded corners to the image */
}

.button-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.camera-container {

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.camera-icon {
  width: 24px;
  height: 24px;
}

.upload-button {
  background-color: #422116;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  text-align: center;
  transition: background-color 200ms, transform 200ms;
  margin-left: auto;
  
}

.upload-button:hover {
  background-color: #5a3a29; /* Slightly lighter color on hover */
}

.upload-button:active {
  transform: scale(0.98); /* Slightly scale down the button on click */
}

.next-button-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  width: 100%; /* Ensure the container takes full width */
  margin-top: 20px; /* Space from previous element */
}

.next-button {
  
  background-color: #0066cc00;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  text-align: center;
  margin-top: 20px;
  transition: background-color 200ms, transform 200ms;
}





</style>
