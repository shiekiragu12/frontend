<script setup>
import {useRoute, useRouter} from 'vue-router'
import {ShTabs, ShModal, ShForm, shRepo} from '@iankibetsh/shframework'
import {ref} from 'vue'
const route = useRoute()
const mType = route.params.maintenanceType
const reload = ref(0)
const maintenanceType = mType === 'issues' ? 'issue' : mType === 'ideas' ? 'idea' : 'task'
const router = useRouter()
function maintenanceAdded(){
  shRepo.showToast(maintenanceType + ' saved')
  setTimeout(()=>{
    router.push('/maintenance/core/' + mType)
  }, 2000)
}
</script>
<template>
  <H5 class="text-capitalize">{{  mType }}</H5>
  <a href="#addMaintenanceModal" data-bs-toggle="modal" class="btn btn-info btn-sm text-capitalize">Add New {{ maintenanceType }}</a>
  <sh-modal modal-id="addMaintenanceModal" modal-title="Add New">
    <sh-form
    :fields="['urgency_id','name','description']"
    :editors="['description']"
    :action="'maintenance/maintenances/store/' + maintenanceType"
    :fill-selects="{
      urgency_id: {
        url: 'maintenance/urgencies/list/any?all=1'
      }
    }"
    :successCallback="maintenanceAdded"
    />
  </sh-modal>
  <sh-tabs :shared-data="reload" :tabs="['pending','working','closed']" :base-url="'/maintenance/core/' + mType"></sh-tabs>
</template>

<style scoped>

</style>
