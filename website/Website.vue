<script setup>
import {shApis, useUserStore} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {useRoute} from 'vue-router'
import {onMounted, ref} from 'vue'
const userStore = useUserStore()
const {user} = storeToRefs(userStore)
const tabs = []
const route = useRoute()
const id = ref(route.params.id)
let website = ref(null)

onMounted(() => {
  getWebsite()
})
function getWebsite() {
  shApis.doGet('config/settings/websites/list/any' + id.value).then(res => {
    website.value = res.data.website
  }).catch(ex => {
    console.log(ex)
  })
}
if (user.value.isAllowedTo('config.deadlines')) {
  tabs.push('discounts','website-payment-accounts')
}
</script>
<template>
  <h5>Website Settings</h5>
</template>
<style scoped>
</style>
