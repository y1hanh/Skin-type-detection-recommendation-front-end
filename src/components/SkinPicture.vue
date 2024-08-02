<template>
  <body>
    <div>
      <img src="../assets/kuromi_full.png" alt="skin picture" />
    </div>
    <div class="button-skin-picture">
      <img src="../components/icons/camera.png" alt="selfie"/>
      <button class="button-2">Upload</button>
    </div>
  </body>
</template>
<style scoped>
body{
  text-align: center;
}

.button-skin-picture {
  padding: 20px 0;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}

.button-2 {
  background-color: #422116;
  border-radius: 8px;
  border-width: 0;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
</style>