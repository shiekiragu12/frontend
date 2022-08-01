<script setup>
import {useRoute} from 'vue-router'
import {ShTable} from '@iankibetsh/shframework'
import {ref, defineProps, watch} from 'vue'
import SingleMaintenance from '../maintenance/SingleMaintenance.vue'
const reload = ref(0)
const route = useRoute()
const mType = route.params.maintenanceType
const props = defineProps(['sharedData'])
const sharedData = ref(props.sharedData)
watch(sharedData,()=>{
  reload.value++
})
</script>
<template>
  <sh-table
      :reload="reload"
      :end-point="'maintenance/maintenances/list/' + mType + '/' + route.params.status">
    <template v-slot:records="slotProps">
      <div class="list-group">
        <template v-for="maintenance in slotProps.records" :key="maintenance.id">
          <single-maintenance :maintenance="maintenance" />
        </template>
      </div>
    </template>
  </sh-table>
</template>

<style scoped>

</style>
