<script setup>
import {ShTable, ShModal, ShForm, shRepo} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedsticky_note = ref(null)
let editbtn = ref(null)
function sticky_noteAdded() {
  reload.value++
}
function editsticky_note (sticky_note) {
  editedsticky_note.value = sticky_note
  if (sticky_note) {
    editbtn.value.click()
  }
}
function mark_resolved(stickynote) {
  shRepo.runPlainRequest('stickynotes/stickynote/mark-resolve/' + stickynote.id).then((res) => {
    if (res.isConfirmed) {
      reload.value++
      shRepo.showToast('sticky note mark resolved', 'success')
    }
  })
}
</script>
<template>
  <a href="#sticky_noteModal" @click="editsticky_note(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#sticky_noteModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','title','description','created_at']"
            end-point="stickynotes/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editsticky_note
                  },
                    {
                    label: 'Mark Resolve',
                    class: 'ms-2 btn btn-warning btn-sm',
                    emits: mark_resolved
                  }
              ]
            }"
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
