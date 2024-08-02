<script setup>
import SkinPicture from "./SkinPicture.vue"
import Survey from "./Survey.vue"
</script>

<template>
  <body class="mbti-parent">
    <div class="mbti-box">
      <SkinPicture></SkinPicture>
    </div>
    <div class="mbti-box">
      <Survey></Survey>
    </div>
  </body>
</template>

<style scoped>
.mbti-parent {
  display: flex;
  flex-direction:  row;
  justify-content: center;
}

.mbti-box {
  margin-top: 4rem;
  width: 100%;
  height: 100%;
}
</style>