import OrdersMain from '#/orders/OrdersMain.vue'
import Orders from '#/orders/Orders.vue'
import AllOrders from '#/orders/all/All.vue'
import NewOrders from '#/orders/new/Order.vue'
import CurrentOrders from '#/orders/current/CurrentOrders.vue'
import PendingOrders from '#/orders/current/tabs/PendingOrders.vue'
import WorkingOrders from '#/orders/current/tabs/WorkingOrders.vue'
const routes = [
    {
        path: '/orders',
        component: OrdersMain,
        children: [
            {
                path: 'current',
                component: CurrentOrders,
                children: [
                    {
                        path: 'tab/pending',
                        component: PendingOrders
                    },
                    {
                        path: 'tab/working',
                        component: WorkingOrders
                    }
                ]
            }
        ]
    }
]
export default routes
