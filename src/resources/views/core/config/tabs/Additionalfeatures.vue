<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedadditionalFeature = ref(null)
let editbtn = ref(null)
function additionalFeatureAdded() {
  reload.value++
}
function editadditionalFeature (additionalFeature) {
  editedadditionalFeature.value = additionalFeature
  if (additionalFeature) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>additionalFeature</h5>
  <a href="#additionalModal" @click="editadditionalFeature(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#additionalModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','amount','amount_type','created_at']"
            end-point="config/settings/additionalfeatures/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editadditionalFeature
                  }
              ]
            }"
  />
  <sh-modal modal-id="additionalModal" modal-title="Additional features Form">
    <sh-form
        :fields="['name','description','amount','amount_type']"
        action="config/settings/additionalfeatures/store"
        :current-data="editedadditionalFeature"
        success-callback="additionalFeatureAdded"
        @additionalFeatureAdded="additionalFeatureAdded"
        :fill-selects="{amount_type:{
          data:[
            {id:'percentage',name:'percentage'},
            {id:'amount',name:'amount'},
          ]
        }}"
    />
  </sh-modal>
</template>
<style scoped>

</style>
