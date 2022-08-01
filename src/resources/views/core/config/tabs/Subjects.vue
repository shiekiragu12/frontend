<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let editBtn = ref(null)
let editingSubject = ref(null)
let reload = ref(0)

function subjectAdded () {
  reload.value++
}
function editSubject (subject) {
 editingSubject.value = subject
  if (subject) {
    editBtn.value.click()
  }
}
</script>
<template>
  <h5>Subjects</h5>
  <a href="#subjectModal" ref="editBtn"  data-bs-toggle="modal" class="d-none">Add</a>
  <a href="#subjectModal" @click="editSubject(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','amount','amount_type','created_at']"
            end-point="config/settings/subjects/list/any"
            :actions="{
      label: 'Action',
      actions: [
          {
          label: 'edit',
          class: 'btn btn-sm btn-info',
          emits: editSubject
        }
      ]
      }"
  />
  <sh-modal modal-id="subjectModal" modal-title="Subject Form">
    <sh-form
        :fields="['name','description','amount','amount_type']"
        :current-data="editingSubject"
        action="config/settings/subjects/store"
        success-callback="subjectAdded"
        @subjectAdded="subjectAdded"
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
