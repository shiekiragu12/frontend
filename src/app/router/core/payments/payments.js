import accounts from '#/payments/accounts/accounts.vue'
import payments from '#/payments/payments.vue'
import withdrawals from '#/payments/accounts/withdrawals/withdrawals.vue'
import topUps from '#/payments/topups/TopUps.vue'
const routes = [
    {
        path: '/payments',
        component: payments,
        children: [
            {
                path: 'accounts',
                component: accounts,
                children: [
                    {
                        path: 'withdrawals',
                        component: withdrawals
                    }
                ],
            },
            {
                path: 'top-ups',
                component: topUps
            }
        ]
    }
]

export default routes
