<script setup>
import {useUserStore, ShTable, ShModal, ShForm} from '@iankibetsh/shframework'
import {storeToRefs} from 'pinia'
import {RouterView} from 'vue-router'

const userStore = useUserStore()

const {user} = storeToRefs(userStore)
</script>
<template>
  <div class="row">
    <div class="col-4 ">
      <div class="card sh-card shadow-sm bg-light bg-opacity-50 p-2 rounded-3 ">
        <div class="card-header bg-transparent d-flex justify-content-between">
          <h5>Profile</h5>
          <button class="btn btn-info btn-sm bg-opacity-50 float-end" href="#profileedit" data-bs-toggle="modal">
            Edit</button>
          <sh-modal modal-id="profileedit" modal-title="Edit Profile">
            <sh-form
                :fields="['name','email']"
                action="/user"
                :current-data="user"
                :successCallback="userRegistered"
            />
          </sh-modal>
        </div>
        <div class="card-body py-2">
          <small class="sh-small">ABOUT</small>
          <p class=""><i class="bi bi-person-circle sh-icon"></i>
            {{ user.name}}
          </p>
          <small class="sh-small">CONTACT</small>
          <p><i class="bi bi-person sh-icon"></i>
            {{ user.email}}
          </p>
        </div>
      </div>
    </div>
    <div class="col-1">

    </div>
    <div class="col-6 ">
      <div class="sh-card card bg-light bg-opacity-50 p-2 rounded-3">
        <div class="card-header d-flex justify-content-between bg-white p-3">
          <h5 class="fw-bold sh-card-title"> Activity Stream</h5>
          <i class="bi bi-three-dots-vertical"></i>
        </div>
        <div class="card-body">
          <sh-table
              :headers="['id','user','device']"
              end-point="admin/activitieslogs/list"
          >
              <template v-slot:records="slotProps">
              <div class="container sh-activities" v-for="log in slotProps.records" :key="log.id">
                <div class="d-flex justify-content-between">
                  <h5 class="sh-card-title text-capitalize">{{log.slug}}</h5>
                  <small class="sh-small">{{log.created_at}}</small>
                </div>
                <p>{{ log.log }}</p>
              </div>
            </template>
          </sh-table>
        </div>
      </div>

    </div>
  </div>
</template>
<style>

/*.pop-cards:hover{*/
/*  transform: scale(1.5);*/
/*  float: bottom;*/
/*}*/

.sh-card{
  font-size: 100%;
  font-family: "Inter", sans-serif;
  border-radius: 10px;
}
.sh-small{
  color: #8c98a4;
  font-size: 63%;
  font-weight: bold;

}
.sh-icon{
  color: #8c98a4;
}
.sh-card-title{
  font-weight: bold;
  font-family: "Inter", sans-serif;
  font-size: 100%;

}
.sh-activities{

}
</style>

