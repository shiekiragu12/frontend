<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedwithdrawal = ref(null)
let editbtn = ref(null)
function withdrawalAdded() {
  reload.value++
}
function editwithdrawal (withdrawal) {
  editedwithdrawal.value = withdrawal
  if (withdrawal) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>withdrawal</h5>
  <a href="#withdrawalModal" @click="editwithdrawal(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#withdrawalModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','account_name','account_number','created_at']"
            end-point="payments/accounts/withdrawal/list/self"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editwithdrawal
                  }
              ]
            }"
  />
  <sh-modal modal-id="withdrawalModal" modal-title="withdrawal Form">
    <sh-form
        :fields="['account_name','account_number','withdrawal_account_type_id']"
        action="payments/accounts/withdrawal/store"
        :current-data="editedwithdrawal"
        success-callback="withdrawalAdded"
        @withdrawalAdded="withdrawalAdded"
        :fill_selects="{
        withdrawal_account_type_id: {
          url: 'admin/departments/department/list-pending-modules/' + id
        }
      }"
    />
    </sh-modal>
</template>
<style scoped>

</style>
