<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedPaperFormats = ref(null)
let editbtn = ref(null)
function paperformatsAdded() {
  reload.value++
}
function editPaperFormats (paperformats) {
  editedPaperFormats.value = paperformats
  if (paperformats) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>Paper formats</h5>
  <a href="#paperModal" @click="editPaperFormats(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#paperModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','amount','amount_type','created_at']"
            end-point="config/settings/paperformats/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editPaperFormats
                  }
              ]
            }"
  />
  <sh-modal modal-id="paperModal" modal-title="Paper format Form">
    <sh-form
        :fields="['name','description','amount','amount_type']"
        action="config/settings/paperformats/store"
        :current-data="editedPaperFormats"
        success-callback="paperformatsAdded"
        @paperformatsAdded="paperformatsAdded"
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
