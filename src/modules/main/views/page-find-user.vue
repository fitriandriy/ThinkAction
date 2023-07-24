<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { BaseInput } from '@/components/index'
import UserSneakPeak from '../components/user-sneakpeak.vue'

let users = ref([])

let data = reactive({
  name: ''
})

async function search() {
  axios
    .get('http://localhost:8000/users', {
      params: {
        name: data.name
      }
    })
    .then((result) => {
      users.value = result.data.data
      // console.log(JSON.stringify(result.data.data))
      console.log(`DATA = ${JSON.stringify(users._rawValue)}`)
    })
    .catch((err) => {
      console.log(err.response)
    })
}
</script>

<template>
  <div class="main-content-container">
    <div class="flex">
      <component
        :is="BaseInput"
        v-model="data.name"
        placeholder="Cari pengguna"
        class="border-2 border-slate rounded-lg w-full"
        @keyup.enter="search"
      >
      </component>
    </div>

    <!-- search result -->
    <div>
      <div v-for="user in users" :key="user.id">
        <router-link :to="{ path: `user/${user.id}` }">
          <UserSneakPeak
            :id="user.id"
            :fullname="user.fullname"
            :username="user.username"
            :avatar="user.avatar"
            :supporter="user.supporter"
          >
          </UserSneakPeak>
        </router-link>
      </div>
    </div>
  </div>
</template>
