<script setup>
import {defineProps, ref} from 'vue'
import {ShCanvas, ShForm, shRepo} from '@iankibetsh/shframework'
import moment from 'moment'
import MaintenanceComments from './MaintenanceComments.vue'

const props = defineProps(['maintenance'])
const currentMaintenance = ref(null)

const maintenance = ref(props.maintenance)

function setMaintenanceId(maintenance){
  currentMaintenance.value = maintenance
}
function formatDate(date){
  return moment(date).format('LLL')
}
const newComments = ref(0)
function commentSaved(){
  newComments.value++
  shRepo.showToast('comment added')
}
</script>
<template>
  <a @click="setMaintenanceId(maintenance)" :href="'#viewMaintenanceCanvas_' + maintenance.id" data-bs-toggle="offcanvas" class="list-group-item list-group-item-action d-flex">
    <div class="me-2 text-muted">
      <h5>#{{ maintenance.id }}</h5>
    </div>
    <div class="flex-fill">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 text-capitalize text-info flex-fill">{{  maintenance.name }}</h5>
        <small class="text-muted float-end">{{  formatDate(maintenance.created_at) }}</small>
      </div>
      <p class="mb-1" v-html="maintenance.description">
      </p>
      <small class="text-muted">Created By : <span class="text-primary">{{ maintenance.user }}.</span></small>
    </div>
  </a>
  <sh-canvas :canvas-id="'viewMaintenanceCanvas_' + maintenance.id" position="start big" canvas-title="">
    <template v-if="currentMaintenance">
      <div class="row">
        <div class="col-md-12">
          <div class="card shadow" style="min-height: 88vh">
            <div class="card-body row">
              <div class="col-md-6">
                <h5 class="text-primary">#{{ currentMaintenance.id + ' - ' +currentMaintenance.name }}</h5>
                <div class="d-flex mb-4">
                  <span class="flex-fill">Created By: <strong class="text-info">{{ currentMaintenance.user }}</strong></span>
                  <small class="text-muted">{{ formatDate(currentMaintenance.created_at) }}</small>
                </div>
                <h6 class="text-info">Description</h6>
                <div v-html="currentMaintenance.description"></div>
              </div>
              <div class="col-md-6 mx-auto">
                <h5 class="text-center text-primary">Comments & More</h5>
                <div class="p-1 comments-body">
                    <maintenance-comments :new-comments="newComments" :maintenance="currentMaintenance"/>
                </div>
                <div class="reply-area">
                  <sh-form
                  :fields="['comment']"
                  :action="'maintenance/maintenancecomments/store/' + currentMaintenance.id"
                  :success-callback="commentSaved"
                  submit-btn-class="float-end btn btn-info btn-sm mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </sh-canvas>
</template>


<style scoped>
.comments-body{
  height: 56vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
