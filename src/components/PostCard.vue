<script setup>
defineProps({
  postContent: Object
})
</script>

<template>
  <div>
    <div class="post-header">
      <img class="userAvatar" :src=postContent.user_avatar alt="user avatar">
      {{ postContent["username"] }}
    </div>
  </div>
</template>

<style scoped>
.post-header {

}

.userAvatar {
  width: 35px;
  height: 35px;
  margin: 15px;
}
</style>