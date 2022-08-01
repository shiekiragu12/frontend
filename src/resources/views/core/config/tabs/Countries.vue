<script setup>
import {ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {ref} from 'vue'
let reload = ref(0)
let editedcountry = ref(null)
let editbtn = ref(null)
function countryAdded() {
  reload.value++
}
function editcountry (country) {
  editedcountry.value = country
  if (country) {
    editbtn.value.click()
  }
}
</script>
<template>
  <h5>country</h5>
  <a href="#countryModal" @click="editcountry(null)" data-bs-toggle="modal" class="d-none btn btn-info btn-sm float-end">Add</a>
  <a href="#countryModal" ref="editbtn" data-bs-toggle="modal" class="btn d-none btn-info btn-sm float-end">Add</a>
  <sh-table class="row"
            :reload="reload"
            :headers="['id','name','code','abbrv','created_at']"
            end-point="config/settings/countries/list/any"
            :actions="{
              label: 'Actions',
              actions:[
                  {
                    label: 'Edit',
                    class: 'btn btn-info btn-sm',
                    emits: editcountry
                  }
              ]
            }"
  />
  <sh-modal modal-id="countryModal" modal-title="Country Form">
    <sh-form
        :fields="['name','code','abbrv']"
        action="config/settings/countries/store"
        :current-data="editedcountry"
        success-callback="countryAdded"
        @countryAdded="countryAdded"
    />
  </sh-modal>
</template>
<style scoped>

</style>
