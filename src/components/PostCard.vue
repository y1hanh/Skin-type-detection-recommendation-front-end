<script setup>
import { computed } from 'vue';

defineProps({
  postContent: Object
})

const username = ["Kuromi", "Hello Kitty", "Amaura", "Bulbasaur", "Clefairy", "Skarmory", "Garbodor", "Chico", "Drowzee"]
const getUserAvatar = computed(() => 
"../src/assets/user-avatar/00" + (Math.floor(Math.random() * 10)).toString() + ".jpeg"
)

const getPostPic = computed(() => 
"../src/assets/skin-care-prod/00" + (Math.floor(Math.random() * 10)).toString() + ".jpeg"
)

const getUsername = computed(() => 
username[Math.floor(Math.random() * 10)]
)
</script>

<template>
  <div>
    <div class="post-header">
      <img class="userAvatar" :src=getUserAvatar alt="user avatar">
      <div>
        <div>
        {{ getUsername }}  -  {{ postContent["skin_tag"] }}
        </div>
        <div>
          {{ postContent["create_time"] }}
        </div>
      </div>
    </div>
    <div class="post-content">
      <div style="text-align: center;">
        <img class="post-img" :src="getPostPic" alt="post picture">
      </div>
      <p class="post-content-text">
      {{ postContent?.post?.content }}
        </p>
    </div>
    <div class="post-comment">
      <div class="comment-area">
        <img src="./icons/comment.png" style=" width: 15px;height: 15px;"/>
        Comment
      </div>
      <div style="color: gray;">
        {{ Math.floor(Math.random() * 10) + " comments"}} 
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-header {
  display: flex;
  flex-direction: row;
  align-items: center
}

.userAvatar {
  width: 45px;
  height: 45px;
  margin: 15px;
}

.post-img {
  width: 102px;
  height: 102px;
  margin: 15px;
}

p{
  max-width: 100ch;
  white-space: nowrap;
  overflow: hidden;
}

.post-content-text {
  padding: 1rem;
  text-overflow: ellipsis;
}

.post-content {
  border-bottom: gray solid 0.5px;
}

.post-comment {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
}

.comment-area {
  width: 130px;
  text-align: center;
  font-size: 14px;
  height: 100%;
}
@media (hover: hover){
  .comment-area:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 10px;
  }
}
</style>