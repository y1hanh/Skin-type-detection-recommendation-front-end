<template>
  <main>
    <div class="parent">
      <div class="surveyParent">
        <h1>Survey</h1>
        <p>To let us get to know your skinMBTI better...</p>
      </div>

      <!-- Survey boxes -->
      <div>
        <div v-for="survey in surveys" :key="survey.id">
          <div v-if="currentSurvey === survey.id" class="surveyBox">
            <h3>{{ survey.question }}</h3>
            <div class="surveyAnswer">
              <!-- Single choice (radio) -->
              <div v-if="survey.type === 'radio'">
                <div v-for="(option, index) in survey.options" :key="survey.id + '-' + index" class="radio-group">
                  <input
                    type="radio"
                    :id="survey.id + '-radio-' + index"
                    :name="'survey-' + survey.id" 
                    v-model="models[survey.model]"
                    :value="option"
                  />
                  <label :for="survey.id + '-radio-' + index">{{ option }}</label>
                </div>
              </div>
              <!-- Multiple choice (checkbox) -->
              <div v-if="survey.type === 'checkbox'">
                <div v-for="(option, index) in survey.options" :key="survey.id + '-' + index" class="checkbox-group">
                  <input
                    type="checkbox"
                    :id="survey.id + '-checkbox-' + index"
                    v-model="models[survey.model]"
                    :value="option"
                  />
                  <label :for="survey.id + '-checkbox-' + index">{{ option }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button class="surveyBtn" @click="nextSurvey">Next Survey</button>
      
    </div>
  </main>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import surveyData from '../assets/surveyQuestions.json'

const surveys = ref(surveyData)

const models = {
  selectedMoistureOption: ref(''),
  selectedSensitivityOption: ref(''),
  selectedDarkSpots: ref(''),
  selectedWrinkles: ref(''),
  selectedConcerns: ref([])
}

const currentSurvey = ref(1)

const router = useRouter()

const nextSurvey = () => {
  if (currentSurvey.value === surveys.value.length) {
    // Handle form submission here
    alert('Survey done!')
    
    // router.push('/community')
  } else {
    currentSurvey.value += 1
  }
}
</script>



<style scoped>
.surveyBtn {
  background-color: #E69247;
  color: black;
  border: none;
  padding: 9px 20px;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 80px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-family: Cambria;
}

h1 {
  font-size: 2.1em;
  font-family: Impact;
  color: #E69247;
}

.surveyParent p {
  font-family: Haettenschweiler;
  color: #f7a863;
}

.parent {
  padding: 1% 15%;
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

.radio-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.radio-group input[type="radio"] {
  margin-right: 10px;
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
