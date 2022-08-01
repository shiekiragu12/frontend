<script setup>
import {ShTable, ShModal, ShForm,ShCanvas} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedticket = ref(null)
let editbtn = ref(null)
let getTicket = ref(null)
let ticketCanvasBtn = ref(null)
function ticketAdded() {
  reload.value++
}
function editticket (ticket) {
  editedticket.value = ticket
  if (ticket) {
    editbtn.value.click()
  }
}
function viewMore(ticket) {
  getTicket.value = null
  getTicket.value=ticket
  if (getTicket.value) {
    ticketCanvasBtn.value.click()
  }
}
</script>
<template>
  <h5>Tickets</h5>
  <a href="#ticketModal" data-bs-toggle="modal" class="btn btn-info btn-sm float-end">Add</a>
  <a href="#ticketModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','subject','message','order_id','ticket_department_id','created_at']"
            end-point="tickets/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editticket
                  },
                   {
                    label: 'View',
                    class: 'ms-2 btn btn-warning btn-sm',
                    path: '/tickets/ticket/{id}',
                  },
                  {
                    label: 'More',
                    class: 'ms-2 btn btn-primary btn-sm',
                    emits: viewMore
                  }
              ]
            }"
  />
  <sh-modal modal-id="ticketModal" modal-title="ticket Form">
    <sh-form
        :fields="['subject','message','order_id','ticket_department_id']"
        action="tickets/store"
        :current-data="editedticket"
        success-callback="ticketAdded"
        @ticketAdded="ticketAdded"
    />
  </sh-modal>
  <a href="#ticketCanvas" class="d-none" ref="ticketCanvasBtn" data-bs-toggle="offcanvas"></a>
  <sh-canvas canvas-id="ticketCanvas" position="end enlarged" canvas-title="Manage single tickets">
    <template v-if="getTicket">
      <sh-table class="row"
                :reload="reload"
                :headers="['id','message','from','to','created_at']"
                :end-point="'tickets/ticketmessages/get/any/'+getTicket.id"
      />
    </template>
  </sh-canvas>
</template>
<style scoped>

</style>
