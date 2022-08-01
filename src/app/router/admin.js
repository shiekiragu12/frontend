import AdminMain from '@/resources/views/core/admin/AdminMain.vue'
import Departments from '@/resources/views/core/admin/Departments/Departments.vue'
import Department from '@/resources/views/core/admin/Departments/departments/Department.vue'
const routes = [
  {
    path: '/admin',
    component: AdminMain,
    meta: {
      layout: 'main'
    },
    children: [
      {
        path: 'departments',
        component: Departments
      },
      {
        path: 'departments/permissions/:id',
        component: Department
      }
    ]
  }
]
export default routes
