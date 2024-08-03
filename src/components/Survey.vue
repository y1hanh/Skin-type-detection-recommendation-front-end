<template>
  <main>
    <div class="parent">
      <div  v-if="descriptionResult===''">
      <div class="surveyParent" >
        <h1>Survey</h1>
        <p>To let us get to know your skinMBTI better...</p>
      </div>

      <!-- Survey boxes -->
      <div>
        <div v-for="survey in surveys" :key="survey.id">
          <div v-if="currentSurvey === survey.id" class="surveyBox">
            <h3>{{ survey.question }}</h3>
            <div class="surveyAnswer">
              
              <div v-if="survey.type === 'radio'">
                <div v-for="(option, index) in survey.options" :key="survey.id + '-' + index" class="radio-group">
                  <input
                    type="radio"
                    :id="survey.id + '-radio-' + index"
                    :name="'survey-' + survey.id" 
                    v-model="models[survey.model]"
                    :value="option.text"
                  />
                  <label :for="survey.id + '-radio-' + index">{{ option.text }}</label>
                </div>
              </div>
             
              <div v-if="survey.type === 'checkbox'">
                <div v-for="(option, index) in survey.options" :key="survey.id + '-' + index" class="checkbox-group">
                  <input
                    type="checkbox"
                    :id="survey.id + '-checkbox-' + index"
                    :value="option.text"
                  />
                  <label :for="survey.id + '-checkbox-' + index">{{ option.text }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
      <button class="surveyBtn" @click="nextSurvey">Next Survey</button>
    </div>
  </div>
      <!-- Results Display -->
      <div v-else v-if="currentSurvey === surveys.length" class="surveyBox" >
        <h2>Survey Results</h2>
        <p>{{ surveyResult }}</p>
        <p>{{ descriptionResult }}</p>
        <button class="community-button" @click="handleUpload">Connect to community</button>
      </div>
      
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import surveyData from '../assets/surveyQuestions.json'
import surveyResults from '../assets/surveyResults.json'

const surveys = ref(surveyData)

const models = ref({
  selectedMoistureOption: '', // Should be a string
  selectedSensitivityOption: '', // Should be a string
  selectedDarkSpots: [], // Should be an array
  selectedWrinkles: [], // Should be an array
});


const currentSurvey = ref(1)
const surveyResult = ref('')
const descriptionResult = ref('')

const nextSurvey = () => {
  if (currentSurvey.value === surveys.value.length) {
    compareAnswers();
  } else {
    currentSurvey.value += 1;
  }
}

const compareAnswers = () => {
  // Collect results based on survey responses
  const results = surveys.value.map(survey => {
    // Find the selected option value for each survey
    return survey.options.find(option => option.text === models.value[survey.model])?.value || '';
  });

  // Combine results to create the resultKey
  const resultKey = results.join('').toUpperCase(); // Convert to uppercase

  // Retrieve the description for the resultKey
  const description = surveyResults[resultKey]?.description;

  if (description) {
    surveyResult.value = resultKey;
    descriptionResult.value = description;
   
  } else {
    alert('No skinMBTI available for this. Please answer all the questions!') ;
    surveyResult.value = ''; 
    currentSurvey.value = 1; 
  }
}





</script>





<style scoped>

.community-button {
  background-color: #8c2515;
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
.surveyResults {
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
