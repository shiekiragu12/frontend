import CoreSettings from '@/resources/views/core/config/CoreSettings.vue'
import serviceType from '@/resources/views/core/config/tabs/serviceType.vue'
import Websitemanager from '@/resources/views/core/config/tabs/Websitemanager.vue'
import Paperformats from '@/resources/views/core/config/tabs/Paperformats.vue'
import Currency from '@/resources/views/core/config/tabs/Currency.vue'
import Writercategories from '@/resources/views/core/config/tabs/Writercategories.vue'
import Additionalfeatures from '@/resources/views/core/config/tabs/Additionalfeatures.vue'
import Filetypes from '@/resources/views/core/config/tabs/Filetypes.vue'
import Academiclevels from '@/resources/views/core/config/tabs/Academiclevels.vue'
import Countries from '@/resources/views/core/config/tabs/Countries.vue'
import Subjects from '@/resources/views/core/config/tabs/Subjects.vue'
import Loyaltypoints from '@/resources/views/core/config/tabs/Loyaltypoints.vue'
import Fines from '@/resources/views/core/config/tabs/Fines.vue'
import Paymentaccounts from '@/resources/views/core/config/tabs/Paymentaccounts.vue'
import Discounts from '@/resources/views/core/config/tabs/Discounts.vue'
const routes = [
  {
    path: '/config/settings',
    component: CoreSettings,
    children: [
      {
        path: 'tab/service-types',
        component: serviceType
      },
      {
        path: 'tab/website-managers',
        component: Websitemanager
      },
      {
        path: 'tab/paper-formats',
        component: Paperformats
      },
      {
        path: 'tab/currency',
        component: Currency
      },
      {
        path: 'tab/writer-categories',
        component: Writercategories
      },
      {
        path: 'tab/additional-features',
        component: Additionalfeatures
      },
      {
        path: 'tab/file-types',
        component: Filetypes
      },
      {
        path: 'tab/academic-levels',
        component: Academiclevels
      },
      {
        path: 'tab/countries',
        component: Countries
      },
      {
        path: 'tab/subjects',
        component: Subjects
      },
      {
        path: 'tab/loyalty-points',
        component: Loyaltypoints
      },
      {
        path: 'tab/fines',
        component: Fines
      },
      {
        path: 'tab/payment-accounts',
        component: Paymentaccounts
      },
      {
        path: 'tab/discounts',
        component: Discounts
      }
    ]
  }
]
export default routes
