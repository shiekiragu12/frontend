<script setup>
import {ShTable, useUserStore, ShModal, ShForm, shRepo} from '@iankibetsh/shframework'
import modal from 'bootstrap/js/src/modal.js'
import {storeToRefs} from 'pinia'
import {onMounted, ref} from 'vue'
const userStore = useUserStore()

const urgencyModal = ref(null)
const {user} = storeToRefs(userStore)
const urgency = ref(null)
const  urgencyButton = ref(null)
const reload = ref(0)


function editUrgency(editingUrgency){
  if(editingUrgency){
    urgency.value = editingUrgency
    urgencyModal.value.show()
  } else {
    urgency.value = null
  }
}
function urgencySaved(res){
  shRepo.showToast('Urgency saved')
  reload.value++
}
onMounted(()=>{
  urgencyModal.value = new modal('#urgencyModal', {
    keyboard: false
  })
})
</script>
<template>
  <h5>Maintenance Urgency Configurations</h5>
  <a ref="urgencyButton" href="#urgencyModal" @click="editUrgency(null)" data-bs-toggle="modal" class="btn btn-primary">Add</a>
  <sh-table
  :headers="['id','name','description','color_code']"
  :reload="reload"
  :actions="{
    label: 'Action',
    actions: [
        {
          label: 'Edit',
          class: 'btn btn-sm btn-info',
          emits: editUrgency
        }
    ]
  }"
  end-point="maintenance/urgencies/list/any"
  />
  <sh-modal modal-id="urgencyModal" modal-title="Urgency Form">
    <sh-form :fields="['name','description','color_code']"
             :successCallback="urgencySaved"
             :current_data="urgency"
             action="maintenance/urgencies/store"
    />
  </sh-modal>
</template>
