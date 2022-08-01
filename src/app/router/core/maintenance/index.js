import MaintenanceMain from '#/maintenance/MaintenanceMain.vue'
import MaintenanceCore from '#/maintenance/MaintenanceCore.vue'
import ListMaintenances from '#/maintenance/tabs/ListMaintenances.vue'
import UrgenciesConfig from '#/maintenance/config/UrgenciesConfig.vue'
const routes = [
  {
    path: '/maintenance',
    component: MaintenanceMain,
    children: [
      {
        path: 'config/urgencies',
        component: UrgenciesConfig
      },
      {
        path: 'core/:maintenanceType',
        component: MaintenanceCore,
        children: [
          {
            path: 'tab/:status',
            component: ListMaintenances
          }
        ]
      }
    ]
  }
]

export default routes
