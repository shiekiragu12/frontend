<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedloyaltyPoints = ref(null)
let editbtn = ref(null)
function loyaltyPointsAdded() {
  reload.value++
}
function editloyaltyPoints (loyaltyPoints) {
  editedloyaltyPoints.value = loyaltyPoints
  if (loyaltyPoints) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>loyaltyPoints</h5>
  <a href="#loyaltyPointsModal" @click="editloyaltyPoints(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#loyaltyPointsModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
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
                    emits: editloyaltyPoints
                  }
              ]
            }"
  />
  <sh-modal modal-id="loyaltyPointsModal" modal-title="loyaltyPoints Form">
    <sh-form
        :fields="['name','unit','usd_rate']"
        action="config/settings/currencies/store"
        :current-data="editedloyaltyPoints"
        success-callback="loyaltyPointsAdded"
        @loyaltyPointsAdded="loyaltyPointsAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
