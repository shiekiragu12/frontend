<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedpaymentAcc = ref(null)
let editbtn = ref(null)
function paymentAccAdded() {
  reload.value++
}
function editpaymentAcc (paymentAcc) {
  editedpaymentAcc.value = paymentAcc
  if (paymentAcc) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>paymentAcc</h5>
  <a href="#paymentAccModal" @click="editpaymentAcc(null)"  data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#paymentAccModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','provider','client_id','secret_id','access_token','live_key','expires_at','created_at']"
            end-point="config/settings/paymentaccounts/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editpaymentAcc
                  }
              ]
            }"
  />
  <sh-modal modal-id="paymentAccModal" modal-title="paymentAcc Form">
    <sh-form
        :fields="['name','description','provider','client_id','secret_id','access_token','live_key','expires_at']"
        action="config/settings/paymentaccounts/store"
        :current-data="editedpaymentAcc"
        success-callback="paymentAccAdded"
        @paymentAccAdded="paymentAccAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
