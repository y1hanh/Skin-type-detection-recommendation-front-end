<template>
  <main style="background-color: #802F22;">
    <div class = "homeComponent">
      <div class="homeImage">
      <img src="../assets/homeSkin1.png" alt="image" />
      <img src="../assets/homeSkin2.png" alt="image" />
      <img src="../assets/homeSkin3.png" alt="image" />
    </div>
    <div class ="bmtiImage">
      <h2>SkinMBTI</h2>
      <p>Identify your skin MBTI  based on our AI scanner and analyzer</p>
      <img src="../assets/homeSkin4.png" alt="image" />
    </div>
    </div>
    <div class ="scanBtn">
      <button >TEST ➤</button>
    </div>
    
  </main>
</template>

<style scoped>
.scanBtn{
  display: flex;
  justify-content: center;
}

.scanBtn button{
  background-color: #E69247; 
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: Cambria
}
.btnImg{
  display: flex;
  flex-direction: column;
}
.bmtiImage h2 {
  font-size: 2.1em; 
  font-family:Jim Nightshade;
  font-style: italic;
  color: #E69247;
}
.bmtiImage p {
  font-size: 1.4em; 
  margin-bottom: 1.5%; 
  
  font-family:Caudex;
  color: #ffffff;
  text-align: center;
}
.bmtiImage{
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  justify-content: center;
  align-items: center;
  padding: 5% ; 
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
</style>
