<script setup>
import {useUserStore, ShTable} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
</script>
<template>
  <p>Pending Orders</p>
  <sh-table
      :headers="['id','name','description']"
      end-point="orders/self/list/pending"
  />
</template>
<style scoped>

</style>
