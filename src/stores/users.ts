import { ref } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export const useUserStore = defineStore('users', () => {
  const users = ref<User[]>()

  async function getUsers() {
    const result = await axios.get('/api/users.json')
    users.value = result.data
  }

  return { users, getUsers }
})
