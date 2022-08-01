<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedwebsiteManagers = ref(null)
let editbtn = ref(null)
function websiteManagersAdded() {
  reload.value++
}
function editwebsiteManagers (websiteManagers) {
  editedwebsiteManagers.value = websiteManagers
  if (websiteManagers) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>websiteManagers</h5>
  <a href="#websiteManagerModal" @click="editwebsiteManagers(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#websiteManagerModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','website_id','created_at']"
            end-point="config/settings/websitemanagers/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editwebsiteManagers
                  }
              ]
            }"
  />
  <sh-modal modal-id="websiteManagerModal" modal-title="Deadline Form">
    <sh-form
        :fields="['website_id']"
        action="config/settings/websitemanagers/store"
        :current-data="editedwebsiteManagers"
        success-callback="websiteManagersAdded"
        @websiteManagersAdded="websiteManagersAdded"
        :fill-selects="{website_id:{
         url:'config/settings/countries/list/any'
        }}"
    />
  </sh-modal>
</template>
<style scoped>

</style>
