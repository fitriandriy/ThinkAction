<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { usePostStore } from '@/stores/posts'
const postStore = usePostStore()
import UserPost from '../components/user-post.vue'

// const token = localStorage.getItem('accessToken')
// const config = {
//   headers: { Authorization: `Bearer ${token}` }
// }

let posts = ref([])
onMounted(async () => {
  axios
    .get('http://localhost:8000/posts')
    .then((result) => {
      posts.value = result.data.data
      postStore.$state.posts = result.data.data
      // console.log(result)
      // posts.value = result.data
      // console.log(`POST = ${JSON.stringify(posts.value)}`)
    })
    .catch((err) => {
      console.log(err.response)
    })
})

// console.log(`POST VALUE ${JSON.stringify(posts)}`)
</script>

<template>
  <div class="main-content-container">
    <!-- jika goals sudah dibuat -->
    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <UserPost
          :id="post.id"
          :user="post.user"
          :category="post.category"
          :caption="post.caption"
          :photos="post.photos"
          :is_liked="post.is_liked"
          :cheers_count="post.cheers_count"
          :comments_count="post.comments_count"
          :date_time="post.date_time"
        ></UserPost>
      </div>
    </div>

    <!-- jika post belum dibuat -->
    <div v-if="posts.length < 1" class="flex justify-center lg:space-x-15">
      <div class="md:mt-[50px] lg:mt-[100px] space-y-5">
        <h1 class="font-extrabold">Welcome to ThinkAction</h1>
        <p>
          Please, create your goals to start this app. <br class="invisible md:visible" />
          In bellow details guideline for create your goals:
        </p>

        <!-- to do -->
        <div class="space-y-5">
          <div class="card p-4 bg-[#FFD5F3]">
            <span>1. Create your resolutions</span>
          </div>
          <div class="card p-4 bg-[#D5FFD6]">
            <span>2. Create your weekly goals</span>
          </div>
          <div class="card p-4 bg-[#E5D5FF]">
            <span>3. Complete your goals</span>
          </div>
        </div>
      </div>
      <img
        src="/goals.png"
        class="w-0 md:w-[400px] lg:w-[600px] invisible md:visible"
        alt="goals image ilustration"
      />
    </div>
  </div>
</template>
