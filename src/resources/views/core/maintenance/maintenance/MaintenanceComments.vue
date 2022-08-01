<script setup>
import {defineProps, ref, watch} from 'vue'
import {ShTable, useUserStore} from '@iankibetsh/shframework'
import moment from 'moment'
const userStore = useUserStore()

const props = defineProps(['maintenance', 'newComments'])
const maintenance = ref(props.maintenance)
const reload = ref(0)
const {user} = userStore
const addedComments = ref([])
function formatDate(date){
  return moment(date).fromNow()
}
function getRealDate(date){
  return moment(date).format('LLL')
}
watch(props,() => {
  reload.value++
})
</script>
<template>
  <sh-table :reload="reload" :end-point="'maintenance/maintenancecomments/list/' + maintenance.id">
    <template v-slot:records="slotProps">
      <template v-for="comment in slotProps.records.concat(addedComments)" :key="comment.id">
        <div class="comment">
          <div class="alert bg-light w-75">
            <div class="d-flex flex-column">
              <strong class="text-muted">{{  comment.user  }}</strong>
              <div v-html="comment.comment"></div>
              <div>
                <small :title="getRealDate(comment.created_at)" class="float-end">{{ formatDate(comment.created_at) }}</small>
              </div>
            </div>
          </div>
        </div>
      </template>
    </template>
  </sh-table>
</template>

<style scoped>

</style>
