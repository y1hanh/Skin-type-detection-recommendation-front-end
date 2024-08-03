<script setup>
import { computed, ref } from "vue";
import mbti_array from "../assets/mbti_array.json";
import { Button,Input, Upload, Select } from 'ant-design-vue';
import PostCard from "./PostCard.vue"
import postTestData from "../assets/postTestData.json"

const message = ref("");
const postImage = ref([])
const imageUrl = ref("")
const postType = ref("")

const mbtiArray = mbti_array.filter((v) => v.value);
const colorArray = ref(new Array(mbtiArray.length));
colorArray.value.fill(false);

const { TextArea } = Input;

function searchMbti(index) {
  colorArray.value.fill(false);
  colorArray.value[index] = true;
  console.log(colorArray)
};

function handleUpload(event) {
  const file_obj = event.file.originFileObj
  if (file_obj) {
    imageUrl.value = URL.createObjectURL(file_obj)
  }
}

function handlePostType(type) {
  postType.value = type
}

function hanldeNewPost() {

}

</script>


  
<template>
  <body>
  <div class="community-flex-parent">
    <div class="community-flex-left">
      <p class="header">All community</p>
      <hr style="color: #D2CFCF;"/>

      <ul v-for="(mbti, index) in mbtiArray" :key="mbti">
        <li :class="colorArray[index]? 'active': 'inactive'" @click="searchMbti(index)"># {{ mbti.value }}</li>
      </ul>

    </div>
  
    <main>
      <div class="community-flex-right">
        <div class="top-box">
          <div>
            <Upload
              name="avatar"
              :file-list="postImage"
              list-type="picture-card"
              class="avatar-uploader"
              @change="handleUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" class="imgPreview"/>
              <div v-else>
                <div class="ant-upload-text">Upload</div>
              </div>
            </Upload>
            <Select
            :value="postType"
            show-search
            style="width: 102px"
            :options="mbtiArray"
            @change="handlePostType"
            >
          </Select>
          </div>

          <TextArea
            class="inputBox"
            v-model="message" 
            placeholder="Make a new post......" 
            :rows="4"  
            show-count 
            :maxlength="100">
          </TextArea>
          <Button class="post-button" type="dashed" @click="hanldeNewPost">Post</Button>
        </div>



        <div class="buttom-box">
          <div v-for="(post, index) in postTestData" :key="index">
            <PostCard class="post-card" :postContent=post>
            </PostCard>
          </div>
        </div>

      </div>
    </main>
  </div>
</body>
</template>
<style scoped>
.imgPreview{
  width:102px;
  height: 102px;
}
body{
  overflow: hidden;
  height: 100vh;
}

ul{
  list-style-type: none;
  margin: 0.5em;
  padding: 0;
}

li{
  color: #858383;
  padding: 0.3rem;
}

.post-button {
  margin: 1rem;
  float: bottom;
}

.active {
  background-color: #802f22b4;
  border-radius: 8px;
  font-weight: 600;
  color: rgb(243, 237, 237);
}

.top-box {
  margin-top: 1rem;
  margin-right: 3rem;
  width: 80%;
  height: 10%;
  display: flex;
}

.avatar-uploader {
  display:inline;
  flex: 1;
}

.inputBox {
  display:inline;
  flex: 4;
}

@media (hover: hover) {
  li:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 8px;
  }
  .post-card:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 10px;
  }
}

.post-card {
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.community-flex-parent {
  display: flex;
  height: 100%;
}

/* left side bar: skin type tags */
.community-flex-left {
  border-right:  1px solid #ededed;
  flex: 1 0 10%;
  padding: 0.5rem;
}

main{
  overflow-y: auto;
  width: 80%;
  margin-left: 1rem;
}

.community-flex-right {
  margin: 0px auto;
  display: flex;
  flex-direction: column;
}


.buttom-box{
  width: 80%;
  height: 90%;
  margin-top: 2rem;

  margin-right: 3rem;
}

.header {
  margin: 1rem;
  font: 14px "Fira Sans", sans-serif;
  color: #858383;
  font-weight: bold;
}

@media (max-width: 500px) {
  .community-flex-right {
    flex-direction: column-reverse;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
}
</style>
