<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedDiscounts = ref(null)
let editbtn = ref(null)
function DiscountsAdded() {
  reload.value++
}
function editDiscounts (Discounts) {
  editedDiscounts.value = Discounts
  if (Discounts) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>Discounts</h5>
  <a href="#DiscountsModal" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#DiscountsModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','code','amount','description','min_cpp','max_orders','website_id','email','writer_cpp','password','role','username','created_at']"
            end-point="config/settings/discounts/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editDiscounts
                  }
              ]
            }"
  />
  <sh-modal modal-id="DiscountsModal" modal-title="Discounts Form">
    <sh-form
        :fields="['code','amount','description','min_cpp','max_orders','website_id','email','writer_cpp','password','role','username']"
        action="config/settings/discounts/store"
        :current-data="editedDiscounts"
        success-callback="DiscountsAdded"
        @DiscountsAdded="DiscountsAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
