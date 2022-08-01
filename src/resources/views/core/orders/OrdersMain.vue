<script setup>
import {useUserStore} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
</script>
<template>
  <router-view></router-view>
</template>
<style scoped>

</style>
