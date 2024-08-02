<template>
  <main>
    <div class="surveyParent"><h1>Survey</h1>
    <p>To let us get to know your skinMBTI better...</p></div>
    
    
    <!-- Survey boxes -->
    <div>
      <!-- Moisture Level Survey -->
      <div v-if="currentSurvey === 1" class="surveyBox">
        <h3>How would you describe your skin's moisture level?</h3>
        <div class="surveyAnswer">
          <div v-for="(option, index) in moistureOptions" :key="'moisture-' + index" class="checkbox-group">
            <input
              type="checkbox"
              :id="'moisture-checkbox-' + index"
              v-model="selectedMoistureOptions"
              :value="option"
            />
            <label :for="'moisture-checkbox-' + index">{{ option }}</label>
          </div>
        </div>
      </div>

      <!-- Sensitivity Level Survey -->
      <div v-if="currentSurvey === 2" class="surveyBox">
        <h3>How does your skin react to new skincare products or environmental changes?</h3>
        <div class="surveyAnswer">
          <div v-for="(option, index) in sensitivityOptions" :key="'sensitivity-' + index" class="checkbox-group">
            <input
              type="checkbox"
              :id="'sensitivity-checkbox-' + index"
              v-model="selectedSensitivityOptions"
              :value="option"
            />
            <label :for="'sensitivity-checkbox-' + index">{{ option }}</label>
          </div>
        </div>
      </div>

      <!-- Dark Spots Survey -->
      <div v-if="currentSurvey === 3" class="surveyBox">
        <h3>Do you have any visible dark spots, freckles, or uneven skin tone?</h3>
        <div class="surveyAnswer">
          <div class="checkbox-group">
            <input
              type="radio"
              id="darkspots-yes"
              v-model="selectedDarkSpots"
              value="Yes, I have dark spots, freckles, or uneven pigmentation."
            />
            <label for="darkspots-yes">Yes, I have dark spots, freckles, or uneven pigmentation.</label>
          </div>
          <div class="checkbox-group">
            <input
              type="radio"
              id="darkspots-no"
              v-model="selectedDarkSpots"
              value="No, my skin tone is fairly even without noticeable dark spots."
            />
            <label for="darkspots-no">No, my skin tone is fairly even without noticeable dark spots.</label>
          </div>
        </div>
      </div>

      <!-- Wrinkles Survey -->
      <div v-if="currentSurvey === 4" class="surveyBox">
        <h3>How prone is your skin to developing fine lines or wrinkles?</h3>
        <div class="surveyAnswer">
          <div class="checkbox-group">
            <input
              type="radio"
              id="wrinkles-yes"
              v-model="selectedWrinkles"
              value="I have visible fine lines or wrinkles, or I notice them developing. "
            />
            <label for="wrinkles-yes">I have visible fine lines or wrinkles, or I notice them developing. </label>
          </div>
          <div class="checkbox-group">
            <input
              type="radio"
              id="wrinkles-no"
              v-model="selectedWrinkles"
              value="My skin is smooth, with minimal to no visible wrinkles. "
            />
            <label for="wrinkles-no">My skin is smooth, with minimal to no visible wrinkles. </label>
          </div>
        </div>
      </div>

      <!-- Skin Concern Survey -->
      <div v-if="currentSurvey === 5" class="surveyBox">
        <h3>What is your biggest skin concern or priority? (multiple answers)</h3>
        <div class="surveyAnswer">
          <div v-for="(option, index) in concernOptions" :key="'concern-' + index" class="checkbox-group">
            <input
              type="checkbox"
              :id="'concern-checkbox-' + index"
              v-model="selectedConcerns"
              :value="option"
            />
            <label :for="'concern-checkbox-' + index">{{ option }}</label>
          </div>
        </div>
      </div>
    </div>

    <button class="surveyBtn" @click="nextSurvey">Next Survey</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'

// Options for the skin moisture level survey
const moistureOptions = ref([
  'My skin often feels tight, rough, or flaky.',
  'My skin feels balanced, not particularly oily or dry.',
  'My skin often feels oily, especially by the end of the day.'
])

// Options for the skin sensitivity level survey
const sensitivityOptions = ref([
  'My skin often reacts with redness, itching, or breakouts.',
  'My skin rarely reacts to products or environmental changes.'
])

// Options for the skin concern survey
const concernOptions = ref([
  'Reducing fine lines and wrinkles.',
  'Managing acne or breakouts.',
  'Evening out skin tone and pigmentation.',
  'Controlling oil and shine',
  'Hydrating and soothing dry skin',
  'Maintaining a natural and minimal skincare routine'
])

// Arrays to hold selected options for each survey
const selectedMoistureOptions = ref([])
const selectedSensitivityOptions = ref([])
const selectedDarkSpots = ref('')
const selectedWrinkles = ref('')
const selectedConcerns = ref([])

// Variable to track the currently visible survey
const currentSurvey = ref(1)
import {useRouter} from 'vue-router';
const router = useRouter();

// Function to switch surveys
const nextSurvey = () => {
  if (currentSurvey.value === 5) {
    // Handle form submission here
    alert('Form submitted!')
    currentSurvey.value = 5
    router.push('/community')
  } else {
    currentSurvey.value += 1
  }
}
</script>

<style scoped>
.surveyBtn{
  background-color: #E69247; 
  color: black; 
  border: none; 
  padding: 9px 20px; 
  text-align: center; 
  font-size: 16px; 
  margin-top:10px;
  margin-bottom: 80px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-family: Cambria
}

h1{font-size: 2.1em; 
  font-family:Impact;
  color: #E69247;}
  .surveyParent p{
    font-family:Haettenschweiler;
  color: #f7a863;
  }
.surveyBox {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 20px 0; /* Add margin between survey boxes */
}

.surveyBox h3 {
  font-size: 1.2em;
  color: #333;
}

.surveyAnswer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2%;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-group input[type="checkbox"] {
  margin-right: 10px;
}
</style>
