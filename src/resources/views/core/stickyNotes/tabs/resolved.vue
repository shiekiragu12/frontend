<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'

let reload = ref(0)
let editedsticky_note = ref(null)
let editbtn = ref(null)

function sticky_noteAdded() {
  reload.value++
}


</script>
<template>
  <a href="#sticky_noteModal"  data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#sticky_noteModal" ref="editbtn" data-bs-toggle="modal"
     class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','title','description','created_at']"
            end-point="stickynotes/list/any"
  />
  <sh-modal modal-id="sticky_noteModal" modal-title="sticky_note Form">
    <sh-form
        :fields="['title','description']"
        action="stickynotes/store"
        :current-data="editedsticky_note"
        success-callback="sticky_noteAdded"
        @sticky_noteAdded="sticky_noteAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
