<script setup>
import { ShTabs, useUserStore } from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
const userStore = useUserStore()
const {user} = storeToRefs(userStore)
const tabs = []

if (user.value.isAllowedTo('stickynotes')) {
  tabs.push('active','resolved')
}
</script>
<template>
  <h5>Core Settings</h5>
    <sh-tabs :responsive="true"
        class="sh-tabs"
        :tabs="tabs"
        :base-url="'/sticky-notes'"
    />
</template>
<style scoped lang="scss">
.navbar-toggler{
  text-decoration: none;
}
</style>
