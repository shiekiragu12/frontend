<script setup>
import {useUserStore, ShTable, ShForm, ShModal, shRepo} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'
import {ref} from "vue";

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
const reload = ref(0)
function guideAdded(){
  reload.value++
  shRepo.showToast('Guide submitted')

}
</script>
<template>
  <a href="#guidesModal" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <sh-table
      :headers="['id','title','description']"
      :reload="reload"
      end-point="guides/list/any"
  />
  <sh-modal modal-id="guidesModal" modal-title="Guides Form">
    <sh-form
        class="sh-form"
        :fields="['title','description']"
        action="guides/store"
        :successCallback="guideAdded"
    />
  </sh-modal>
</template>
<style scoped>
.sh-form{
  font-family: "Inter", sans-serif;
}
</style>
