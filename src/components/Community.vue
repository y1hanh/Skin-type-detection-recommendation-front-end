<script setup>
import { computed, ref } from "vue";
import mbti_array from "../assets/mbti_array.json";
import { Button,Input, Upload, Select } from 'ant-design-vue';
import PostCard from "./PostCard.vue"
import postTestData from "../assets/postTestData.json"
import { addPost, getPost, searchPost } from '@/apis/community.js'

const allPosts = ref([])

const message = ref("");
const postImage = ref([])
const imageUrl = ref("")
const postType = ref("")
const base64 = ref("")

const mbtiArray = mbti_array.filter((v) => v.value);
const colorArray = ref(new Array(mbtiArray.length));
colorArray.value.fill(false);

const { TextArea } = Input;

async function searchMbti(index) {
  // change the background color
  colorArray.value.fill(false);
  colorArray.value[index] = true;
  try {
    const res = await searchPost(mbtiArray[index].value);
    const { body } = await res.json();
    allPosts.value = JSON.parse(body);
  } catch (error) {
    
  }
};

async function handleUpload(event) {
  const file_obj = event.file.originFileObj
  if (file_obj) {
    imageUrl.value = URL.createObjectURL(file_obj)
    // base64.value = await convertBase64(image_file);
  }
  
}

// const convertBase64 = (file) => {
//   return new Promise ((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);

//       fileReader.onload = () => {
//           resolve(fileReader.result)
//       }

//       fileReader.onerror = (error) => {
//           reject(error)
//       }
//   })
// } 

function handlePostType(type) {
  postType.value = type
}

async function hanldeNewPost() {
  const data = {
  }
  try {
    const res = await addPost(data)
    // const json_res = res.json()
    // json_res.then(
    //   function({statusCode}){
    //     if(statusCode == 200)
    //     {
    //       success.value = true
    //       loading.value = false
    //     }
    //   }
    // )
  } catch (error) {
    console.log(error)
  }
}

async function getAllPosts() {
  try {
    const res = await getPost();
    const { body } = await res.json();
    allPosts.value = JSON.parse(body);
  } catch (error) {
    
  }
}
getAllPosts()
</script>


  
<template>
  <body>
  <div class="community-flex-parent">
    <div class="community-flex-left">
      <div class="header" @click="getAllPosts">All community</div>
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
          <div v-for="(post, index) in allPosts" :key="index">
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

  .header:hover {
    background-color: rgba(113, 113, 113, 0.082);
    border-radius: 8px;
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
  font: 14px "Fira Sans", sans-serif;
  color: #858383;
  font-weight: bold;
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 5px;
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
