<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { BaseInput } from '@/components/index'
import UserSneakPeak from '../components/user-sneakpeak.vue'

let users = ref([
  {
    id: 'GhtHVSB12NHGBSGHHw',
    fullname: 'Fitri Andriyani',
    username: 'Fitri07',
    avatar: 'https://ik.imagekit.io/at4li2svjc/PzV4gC17iYZl_HemoeHWaL',
    supporter: [
      {
        id: 'GhtHVSB12NHGBSGHHg',
        username: 'Alf'
      },
      {
        id: 'GhtHVSB12NHGBSGHdd',
        username: 'Ali'
      },
      {
        id: 'GhtHVSB12NHGBSGHHs',
        username: 'Aif'
      },
      {
        id: 'GhtHVSB12NHGBSGHtg',
        username: 'lif'
      }
    ]
  }
])

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
      // console.log(`DATA = ${JSON.stringify(users.value._rawValue)}`)
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
