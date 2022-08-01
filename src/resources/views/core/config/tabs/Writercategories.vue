<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedwriterCategory = ref(null)
let editbtn = ref(null)
function writerCategoryAdded() {
  reload.value++
}
function editwriterCategory (writerCategory) {
  editedwriterCategory.value = writerCategory
  if (writerCategory) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>writerCategory</h5>
  <a href="#writerModal" @click="editwriterCategory(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#writerModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','description','writer_cpp','deadline_adjustment','amount','amount_type','late_fine_amount','can_take','created_at']"
            end-point="config/settings/writercategories/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editwriterCategory
                  }
              ]
            }"
  />
  <sh-modal modal-id="writerModal" modal-title="Writer Category Form">
    <sh-form
        :fields="['name','description','writer_cpp','deadline_adjustment','amount','amount_type','late_fine_amount','can_take']"
        action="config/settings/writercategories/store"
        :current-data="editedwriterCategory"
        success-callback="writerCategoryAdded"
        @writerCategoryAdded="writerCategoryAdded"
        :fill-selects="{amount_type:{
          data:[
            {id:'percentage',name:'percentage'},
            {id:'amount',name:'amount'},
          ]
        },can_take:{
          data:[
            {id:1,name:'Yes'},
            {id:0,name:'No'},
          ]
        }}"
    />
  </sh-modal>
</template>
<style scoped>

</style>
