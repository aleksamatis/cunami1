<script setup lang="ts">
import { useUserStore } from '@/stores/users'
import { onBeforeMount } from 'vue'

const store = useUserStore()

onBeforeMount(async () => {
  await store.getUsers()
})
</script>

<template>
  <main>
    <h1>Users</h1>
    <div>
      <div v-for="user in store.users" :key="user.id">
        {{ user.name }}
      </div>
    </div>
  </main>
</template>
