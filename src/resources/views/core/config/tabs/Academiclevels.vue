<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import { ref } from 'vue'
let editedAcademicLevel = ref(null)
let editacademicLevbtn = ref(null)
let reload = ref(0)
function editAcademicLevel(academic_level){
  editedAcademicLevel.value = academic_level
  if (academic_level) {
    editacademicLevbtn.value.click()
  }
}
function academicLevelAdded() {
  reload.value++
}
</script>
<template>
  <h5>Academic Levels</h5>
  <a href="#academicModal" data-bs-toggle="modal" @click="editAcademicLevel(null)" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#academicModal" ref="editacademicLevbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','created_at']"
            end-point="config/settings/academiclevels/list/any"
            :actions="{ label:'Actions',
           actions: [
                {
                  label: 'Edit',
                  class: 'btn btn-sm btn-info',
                  emits: editAcademicLevel
              }
              ]
  }"
  />
  <sh-modal modal-id="academicModal" modal-title="Academic level Form">
    <sh-form
        :fields="['name','description']"
        :current-data="editedAcademicLevel"
        action="config/settings/academiclevels/store"
        success-callback="academicLevelAdded"
        @academicLevelAdded="academicLevelAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
