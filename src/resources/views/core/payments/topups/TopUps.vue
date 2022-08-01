<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'

let reload = ref(0)

function topUpAdded() {
  reload.value++
}

</script>
<template>
  <h5>Top Ups</h5>
  <a href="#topUpModal" @click="topUpAdded(null)" data-bs-toggle="modal" class="d-none btn btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','topped_up_by','amount','reference','created_at','transaction_charge']"
            end-point="payments/topups/list/any"
  />
  <sh-modal modal-id="topUpModal" modal-title="topUp Form">
    <sh-form
        :fields="['account_name','account_number','topUp_account_type_id']"
        action="payments/accounts/topUp/store"
        :current-data="editedtopUp"
        success-callback="topUpAdded"
        @topUpAdded="topUpAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
