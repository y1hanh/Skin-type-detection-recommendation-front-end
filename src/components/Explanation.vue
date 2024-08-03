<script setup>
import mbti_array from "../assets/mbti_array.json";

</script>
<template>
    <div id="playGrid" class="w">
      <div class="first-line">
        <a href="https://skintypesolutions.com/blogs/baumann-skin-type-1-dspt" target="_blank">DSPT</a>
        <span>Dry, Sensitive, Pigmented, and Tight</span>
      </div>
      <div class="first-line">
        <a href="https://skintypesolutions.com/blogs/baumann-skin-type-2-dsnt" target="_blank">DSNT</a>
        <span>Dry, Sensitive, Non-pigmented, and Tight</span>
      </div>
      <div class="first-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-3-dspw" target="_blank">DSPW</a>
        <span>Dry, Sensitive, Pigmented, and Wrinkled</span>
      </div>
      <div class="first-line">
        <a href="https://skintypesolutions.com/blogs/baumann-skin-type-4-dsnw" target="_blank">DSNW</a>
        <span>Dry, Sensitive, Non-pigmented, and Wrinkled</span>
      </div>
    
      <div class="second-line">
        <a href="https://skintypesolutions.com/blogs/baumann-skin-type-5-ospt" target="_blank">OSPT</a>
        <span>Oily, Sensitive, Pigmented, and Tight</span>
      </div>
      <div class="second-line">
        <a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">OSNT</a>
        <span>Oily, Sensitive, Non-pigmented, and Tight</span>
      </div>
      <div class="second-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">OSPW</a>
        <span>Oily, Sensitive, Pigmented, and Wrinkled</span>
      </div>
      <div class="second-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">OSNW</a>
        <span>Oily, Sensitive, Non-pigmented, and Wrinkled</span>
      </div>
     
      <div class="third-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">ORPT</a>
        <span>Oily, Resistant, Pigmented, and Tight</span>
      </div>
      <div class="third-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">ORNT</a>
        <span>Oily, Resistant, Non-pigmented, and Tight</span>
      </div>
      <div class="third-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">ORPW</a>
        <span>Oily, Resistant, Pigmented, and Wrinkled</span>
      </div>
      <div class="third-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">ORNW</a>
        <span>Oily, Resistant, Non-pigmented, and Wrinkled</span>
      </div>
     
      <div class="forth-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">DRPT</a>
        <span>Dry, Resistant, Pigmented, and Tight</span>
      </div>
      <div class="forth-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">DRNT</a>
        <span>Dry, Resistant, Non-pigmented, and Tight</span>
      </div>
      <div class="forth-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">DRPW</a>
        <span>Dry, Resistant, Pigmented, and Wrinkled</span>
      </div>
      <div class="forth-line"><a href="https://skintypesolutions.com/blogs/baumann-skin-type-6-osnt" target="_blank">DRNW</a>
        <span>Dry, Resistant, Non-pigmented, and Wrinkled</span>
      </div>
    </div>
</template>
<style scoped>
#playGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px;
  align-content: stretch;
  width: 40vw;
  height: 40vw;
}
#playGrid div {
  color: white;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 800;
}

span {
  font-size: 12px;
  text-align: center;
}
div a {
  color: white;
}

.first-line {
  background-color: #842e93;
}

.second-line {
  background: #599c72;
}

.third-line {
  background: #5754b9;
}

.forth-line {
  background: #b9c752;
}

@media (hover: hover) {
  #playGrid div:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 8px;
  }
}

</style>