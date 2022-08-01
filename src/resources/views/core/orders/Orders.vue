<script setup>
import {useUserStore, ShTable} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
</script>
<template>
  <h5>Orders Index</h5>
</template>
<style scoped>

</style>
