<template>
  <div>
    <div class="parent">
      <h2>Scan Your SkinMBTI here</h2>
      <div class="image-container">
        <video v-show="!flag" id="video" autoplay></video>
        <canvas id="canvas" style="display: none;"></canvas>
        <img v-show="flag" id="captured-image" style = "display: none;"/>
      </div>
      <div class="button-container">
        <div class="camera-container">
          <img src="../components/icons/camera.png" alt="Camera Icon" class="camera-icon" @click="captureImage" />
        </div>
      </div>
    </div>
    <div v-if="loadingVisible" class="next-button-parent">
      <button class="next-button" @click="showNextSection">loading...</button>
    </div>
    <div v-if="uploadClicked" class="next-button-parent">
      <button class="next-button" @click="showNextSection">▼</button>
    </div>
    <div v-if="nextSectionVisible">
      <Survey :resultText="resultText"></Survey>
    </div>
  </div>
</template>

<script>
import Survey from "./Survey.vue";

export default {
  components: {
    Survey
  },
  data() {
    return {
      loadingVisible: false,
      uploadClicked: false,
      nextSectionVisible: false,
      resultText: '',
      allImages: [],
      flag: false
    };
  },
  methods: {
    async captureImage() {
      this.loadingVisible = true;
      const video = document.getElementById('video');
      const canvas = document.getElementById('canvas');
      canvas.width = 320;
      canvas.height = 240;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageElement = document.getElementById('captured-image');
      
      canvas.toBlob(async (blob) => {
        if (blob) {
          const imageUrl = URL.createObjectURL(blob);
          imageElement.src = imageUrl;
          this.flag = true;
          imageElement.style.display = "block";
          video.style.display = null;

          await this.analyzeImage(blob);
        } else {
          console.error('Failed to capture image.');
        }
      }, 'image/jpeg');
    },
  
    showNextSection() {
      this.nextSectionVisible = true;
      window.scrollBy(0, 200);
    },
    async analyzeImage(blob) {
      const formData = new FormData();
      formData.append('file', blob, 'photo.jpg'); // Added filename to the Blob

      try {
        const response = await fetch('http://127.0.0.1:5001/predict', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        this.resultText = `Detected Skin Type: ${result.skin_type}<br>Recommendations:<ul>`;
        this.loadingVisible = false;
        this.uploadClicked = true;
        result.recommendations.forEach(rec => {
          this.resultText += `<li>${rec}</li>`;
        });
        this.resultText += `</ul>`;
      } catch (error) {
        this.resultText = `Error: ${error.message}`;
      }
    }
  },
  mounted() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          const video = document.getElementById('video');
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.error('Error accessing camera:', err);
        });
    }
  }
};
</script>

<style scoped>
.next-button-parent{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.parent h2 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.parent {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border: 4px solid #ebebeb;
  border-radius: 20px;
  padding: 80px 40px;
  background-color: #f9f9f9;
  width: 80%;
  max-width: 400px; 
  align-items: center;
  margin-top: 6%;
}
.image-container {
  border: 2px solid #000;
  border-radius: 20px;
  margin-bottom: 40px;
  margin-top: 5px;
  overflow: hidden;
}
.image-container video {
  width: 100%;
}
img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}
.button-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}
.camera-container {
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.camera-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.next-button {
  display: flex;
  align-items: center;
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
