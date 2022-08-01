<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editeddepartment = ref(null)
let editbtn = ref(null)
function departmentAdded() {
  reload.value++
}
function editdepartment (department) {
  editeddepartment.value = department
  if (department) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>department</h5>
  <a href="#departmentModal" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#departmentModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','created_at']"
            end-point="tickets/ticketdepartments/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editdepartment
                  }
              ]
            }"
  />
  <sh-modal modal-id="departmentModal" modal-title="department Form">
    <sh-form
        :fields="['name','description']"
        action="tickets/ticketdepartments/store"
        :current-data="editeddepartment"
        success-callback="departmentAdded"
        @departmentAdded="departmentAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
