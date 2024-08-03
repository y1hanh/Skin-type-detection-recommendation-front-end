<script setup>
defineProps({
  postContent: Object
})
</script>

<template>
  <div>
    <div class="post-header">
      <img class="userAvatar" :src=postContent.user_avatar alt="user avatar">
      <div>
        <div>
        {{ postContent["username"] }}  -  {{ postContent["skin_tag"] }}
        </div>
        <div>
          {{ postContent["create_time"] }}
        </div>
      </div>
    </div>
    <div class="post-content">
      <div style="text-align: center;">
        <img class="post-img" :src="postContent?.post?.picture" alt="post picture">
      </div>
      <div class="post-content-text">
      {{ postContent?.post?.content }}
        </div>
    </div>
    <div class="post-comment">
      <div class="comment-area">
        <img src="./icons/comment.png" style=" width: 15px;height: 15px;"/>
        Comment
      </div>
      <div style="color: gray;">
        {{ postContent?.comments?.length ? postContent?.comments?.length + " comments" : "0 comment"}} 
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

.post-content-text {
  padding: 1rem;
}

.post-comment {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

@media (hover: hover){
  .comment-area:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 10px;
  }
}
</style>