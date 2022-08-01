<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedFines = ref(null)
let editbtn = ref(null)
function FinesAdded() {
  reload.value++
}
function editFines (Fines) {
  editedFines.value = Fines
  if (Fines) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>Fines</h5>
  <a href="#FinesModal" @click="editFines(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#FinesModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','amount','description','late_hours','writers_category','created_at']"
            end-point="config/settings/fines/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editFines
                  }
              ]
            }"
  />
  <sh-modal modal-id="FinesModal" modal-title="Fines Form">
    <sh-form
        :fields="['name','amount','description','late_hours','writers_category']"
        action="config/settings/fines/store"
        :current-data="editedFines"
        success-callback="FinesAdded"
        @FinesAdded="FinesAdded"
        :fill-selects="{writers_category:{
        url:'config/settings/writercategories/list/any'
        }}"
    />
  </sh-modal>
</template>
<style scoped>

</style>
