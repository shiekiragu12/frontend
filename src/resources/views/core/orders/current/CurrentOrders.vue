<script setup>
import {useUserStore, ShTable, ShTabs} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
</script>
<template>
  <h5>Current Orders</h5>
  <sh-tabs
      :tabs="['pending', 'working']"
      base-url="/orders/current"
  />
</template>
<style scoped>

</style>
