import { defineStore } from 'pinia'
export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: null,
        user: null,
        category: null,
        caption: null,
        photos: null,
        is_liked: null,
        cheers_count: null,
        comments_count: null,
        date_time: null
      }
    ]
  }),
  getters: {
    getPosts(state) {
      return state.posts
    }
  }
})
