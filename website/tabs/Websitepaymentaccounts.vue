<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedwebsitePaymentAcc = ref(null)
let editbtn = ref(null)
function websitePaymentAccAdded() {
  reload.value++
}
function editwebsitePaymentAcc (websitePaymentAcc) {
  editedwebsitePaymentAcc.value = websitePaymentAcc
  if (websitePaymentAcc) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>websitePaymentAcc</h5>
  <a href="#websitePaymentAccModal" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#websitePaymentAccModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','website_id','payment_account_id','created_at']"
            end-point="config/settings/websitepaymentaccounts/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editwebsitePaymentAcc
                  }
              ]
            }"
  />
  <sh-modal modal-id="websitePaymentAccModal" modal-title="websitePaymentAcc Form">
    <sh-form
        :fields="['website_id','payment_account_id']"
        action="config/settings/websitepaymentaccounts/store"
        :current-data="editedwebsitePaymentAcc"
        success-callback="websitePaymentAccAdded"
        @websitePaymentAccAdded="websitePaymentAccAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
