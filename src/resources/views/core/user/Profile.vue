<script setup>
import {useUserStore} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import { ShTabs } from '@iankibetsh/shframework'
import {RouterView} from 'vue-router'

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
</script>
<template>
  <sh-tabs
      :tabs="['profile','settings']"
      base-url="/user/profile"
  />
</template>
<style scoped>
</style>
