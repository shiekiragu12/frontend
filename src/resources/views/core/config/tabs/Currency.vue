<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedcurrency = ref(null)
let editbtn = ref(null)
function currencyAdded() {
  reload.value++
}
function editcurrency (currency) {
  editedcurrency.value = currency
  if (currency) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>Currency</h5>
  <a href="#currencyModal" @click="editcurrency(null)"  data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#currencyModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','unit','usd_rate','created_at']"
            end-point="config/settings/currencies/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editcurrency
                  }
              ]
            }"
  />
  <sh-modal modal-id="currencyModal" modal-title="Currency Form">
    <sh-form
        :fields="['name','unit','usd_rate']"
        action="config/settings/currencies/store"
        :current-data="editedcurrency"
        success-callback="currencyAdded"
        @currencyAdded="currencyAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
