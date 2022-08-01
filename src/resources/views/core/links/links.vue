<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedlink = ref(null)
let editbtn = ref(null)
function linkAdded() {
  reload.value++
}
function editlink (link) {
  editedlink.value = link
  if (link) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>Links</h5>
  <a href="#linkModal" @click="editlink(null)" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#linkModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','url','amount','paid_amount','order_count','conversion_rate','created_at']"
            end-point="links/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editlink
                  }
              ]
            }"
  />
  <sh-modal modal-id="linkModal" modal-title="link Form">
    <sh-form
        :fields="['url','amount','paid_amount','order_count','conversion_rate']"
        action="links/store"
        :current-data="editedlink"
        success-callback="linkAdded"
        @linkAdded="linkAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
