<template>
  <main style="background-color: #802F22;">
    <div class = "homeComponent">
      <div class="homeImage">
      <img src='../assets/homeSkin1.png' alt="image" />
      <img src="../assets/homeSkin2.png" alt="image" />
      <img src="../assets/homeSkin3.png" alt="image" />
    </div>
    <div class ="bmtiImage">
      <h2>16 Baumann Skin Types</h2>
      <p>Identify your skin MBTI based on our AI scanner and analyzer</p>
      <div  class="bmtiImageInner">
        <img src="../assets/homeSkin4.png" alt="image"/>
        
      <div class="updown-bar-inner">
      </div>
    </div>
      
    </div>
    </div>
    <div class ="scanBtn">
      <button @click="handleTestClick">TEST ➤</button>
    </div>
   
  </main>
</template>

<style scoped>

.scanBtn{
  display: flex;
  justify-content: center;
}

.scanBtn button{
  background-color: #FFF0E0; 
  color: black; 
  border: none; 
  padding: 15px 85px; 
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
.btnImg{
  display: flex;
  flex-direction: column;
}
.bmtiImage h2 {
  font-size: 3em; 
  font-family:Jim Nightshade;
  font-style: italic;
  color: #E69247;
}

.bmtiImage p {
  font-size: 2em; 
  margin-bottom: 1.5%; 
  font-family:Caudex;
  color: #ffffff;
  text-align: center;
  font-weight: 900;
}

.bmtiImage{
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  justify-content: center;
  align-items: center;
  padding: 5% ; 
  position: relative;
}

.bmtiImageInner{
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  justify-content: center;
  align-items: center;
  padding: 5% ; 
  position: relative;
}


.homeComponent{
  display: flex;
  flex-direction: row;
  gap: 2%;
  width: 100%;
  justify-content: center;
  padding: 0px 55px; 
  background-color: #802F22; 
}
.homeImage {
  display: flex;
  width: 70%;
  flex-direction: row;
  gap: 2%;
  margin-top: 5%;
  
}

.homeImage img {
  width: 34%;
  height: 80%; /* Maintain aspect ratio */
}

/* Media query for tablets and smaller screens */
@media (max-width: 768px) {
  .homeImage {
    gap: 1%;
    margin-top: 5%;
  }

  .homeImage  img {
    width: 65%;
    height: auto; /* Maintain aspect ratio */
  }
}

/* Media query for mobile phones */
@media (max-width: 480px) {
  .homeImage {
    width: 100%;
    flex-direction: column; /* Stack images vertically on smaller screens */
    gap: 1%;
    margin-top: 3%;
  }

  .homeImage img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
  }
}


  
  .updown-bar-inner {
  width: 80%;
  height: 100%;
  border-top: 2px solid white; /* Change color and thickness as needed */
  position: absolute; /* Ensure it covers the parent */
  bottom: -70%; /* Start position */
  animation: updown 5s infinite ease-in-out;
}
  
  @keyframes updown {
    0% {
      bottom: -70%;
    }
    50% {
      bottom: -20%;
    }
    100% {
      bottom: -70%;
    }
  }
</style>

<script setup>
import {useRouter} from 'vue-router';


const router = useRouter();

function handleTestClick(){
  router.push('/MBTI')
}


</script>
