<script setup>
import {ShTable} from '@iankibetsh/shframework'

function totalRecordCount (count) {
  this.recordCount = count
}

function editLog (Log) {
  this.Log = null
  this.Log = Log
  if (Log) {
    this.$refs.editBtn.click()
  }
}

function formatLog (log) {
  if (!log) {
    return 'log'
  } else {
    return log.log
  }
}

function getLogType (log) {
  if (!log) {
    return 'Type'
  }
  return log.slug.replace(/_/g, ' ')
}
</script>
<template>
  <strong class="float-end mt-3 me-3">Total Records: <span class="text-primary">{{ recordCount }}</span></strong>
  <sh-table class="shadow p-2" :table-hover="true" @totalRecordCount="totalRecordCount" @editLog="editLog"
           :headers="['id','user',getLogType,formatLog, 'device','created_at']" end-point="admin/activitieslogs/list"
           auto-load-more="1"/>
</template>

<style scoped>
.sh-table{
  font-family: "Inter", sans-serif;
}

.sh-thead{
  font-size: 95%;
}
.sh-tbody{
  font-size:90%;
}
</style>
