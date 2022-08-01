import WebsiteCore from '@/resources/views/core/config/websites/websiteCore.vue'
import Websites from '@/resources/views/core/config/websites/Websites.vue'
import Website from '@/resources/views/core/config/websites/website/Website.vue'
import Discounts from '@/resources/views/core/config/websites/website/tabs/Discounts.vue'
import websitePaymentAccounts from '@/resources/views/core/config/websites/website/tabs/Websitepaymentaccounts.vue'
import DefaultOrderConfigs from '@/resources/views/core/config/websites/website/tabs/DefaultOrderConfigs.vue'
const routes = [
    {
        path: '/config/settings',
        component: WebsiteCore,
        children: [
            {
                path: 'websites',
                component: Websites,
            },
            {
                path: 'websites/website/:id',
                component: Website,
                children: [
                    {
                        path: 'tab/discounts',
                        component: Discounts,
                    },
                    {
                        path: 'tab/website-payment-accounts',
                        component: websitePaymentAccounts,
                    },
                    {
                        path: 'tab/default-order-configs',
                        component: DefaultOrderConfigs
                    }

                ]
            }
        ]
    }
]
export default routes
