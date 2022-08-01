<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedfileTypes = ref(null)
let editbtn = ref(null)
function fileTypesAdded() {
  reload.value++
}
function editfileTypes (fileTypes) {
  editedfileTypes.value = fileTypes
  if (fileTypes) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>fileTypes</h5>
  <a href="#fileModal" @click="editfileTypes(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#fileModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','amount','amount_type','created_at']"
            end-point="config/settings/filetypes/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editfileTypes
                  }
              ]
            }"
  />
  <sh-modal modal-id="fileModal" modal-title="File type Form">
    <sh-form
        :fields="['name','description','amount','amount_type']"
        action="config/settings/filetypes/store"
        :current-data="editedfileTypes"
        success-callback="fileTypesAdded"
        @fileTypesAdded="fileTypesAdded"
        :fill-selects="{amount_type:{
          data:[
            {id:'percentage',name:'percentage'},
            {id:'amount',name:'amount'},
          ]
        }}"
    />
  </sh-modal>
</template>
<style scoped>

</style>
