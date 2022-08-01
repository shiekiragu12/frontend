<script setup>
import {ref, onMounted } from 'vue'
import { ShForm, ShTable, ShModal, shApis } from '@iankibetsh/shframework'

let editingDepartment = ref(null)
let allPermissions = ref([])
let permissions = ref([])
let reload = ref(0)
let permissionsModalBtn = ref(null)

onMounted(() => {
  shApis.doGet('admin/departments/all-permissions').then(res => {
    allPermissions.value = res.data
  })
})


function getPermissionLeft (menu) {
  const len = menu.split('.').length * 2
  if (len > 5) {
    return 5
  }
  return len
}
function getPermissionLabel (menu) {
  const arr = menu.split('.')
  return arr[arr.length - 1].replace(/_/g, ' ')
}
function departmentAdded (response) {
  this.reload += 1
}

function rowSelected(department) {
  editingDepartment.value = department
  if (department.permissions) {
    this.permissions = JSON.parse(department.permissions)
  }
}
</script>
<template>

        <h5>Departments (updated)</h5>
        <a data-bs-toggle="modal" ref="addDeptBtn" href="#department_modal" class="btn btn-info"><i class="fa fa-plus"></i> ADD DEPARTMENT</a>
        <a data-bs-toggle="modal" ref="permissionsModalBtn" href="#permissions_modal" class="btn btn-info d-none"><i class="fa fa-plus"></i> ADD DEPARTMENT</a>
        <ShTable :reload="reload" v-on:rowSelected="rowSelected" :headers="['id','name','description', 'created_at']" end-point="admin/departments/list" :actions="{
      label: 'Action',
      actions: [
        {
          label: 'Permissions',
          path: '/admin/departments/permissions/{id}',
          class: 'btn btn-info bi-lock'
        }
      ]
    }"></ShTable>
    <ShModal modal_id="department_modal" modal_title="Department Form">
      <ShForm success-callback="departmentAdded" @departmentAdded="departmentAdded" action="admin/departments/store" :fields="['name','description']"></ShForm>
    </ShModal>
    <ShModal modal_id="permissions_modal" modal_title="Edit Department Permissions">
      <template v-if="allPermissions && editingDepartment">
        <h3>Permissions for <span class="text-primary">{{ editingDepartment.name }}</span></h3>
        <template v-for="permission in allPermissions" :key="permission">
          <div class="list-group p-0">
            <label class="list-group-item pb-0 text-capitalize" :class="'ms-' + getPermissionLeft(permission)">
              <input type="checkbox" v-model="permissions" :value="permission">
              {{ getPermissionLabel(permission) }}
            </label>
          </div>
        </template>
        <button @click="submitPermissions" class="btn btn-info"><i class="fa fa-save"></i> Submit</button>
      </template>
    </ShModal>
</template>
