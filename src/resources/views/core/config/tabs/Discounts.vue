<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editeddiscount = ref(null)
let editbtn = ref(null)
function discountAdded() {
  reload.value++
}
function editdiscount (discount) {
  editeddiscount.value = discount
  if (discount) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>discount</h5>
  <a href="#discountModal" @click="editdiscount(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#discountModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','amount','description','min_cpp','created_at']"
            end-point="config/settings/discounts/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editdiscount
                  }
              ]
            }"
  />
  <sh-modal modal-id="discountModal" modal-title="discount Form">
    <sh-form
        :fields="['amount','description','min_cpp']"
        action="config/settings/discounts/store"
        :current-data="editeddiscount"
        success-callback="discountAdded"
        @discountAdded="discountAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
