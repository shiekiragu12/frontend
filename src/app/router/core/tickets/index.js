import ticketsCore from '#/tickets/TicketsCore.vue'
import departments from '#/tickets/departments/departments.vue'
import Tickets from '#/tickets/Tickets.vue'
import Ticket from '#/tickets/ticket/Ticket.vue'
const routes = [
  {
    path: '/tickets',
    component: ticketsCore,
    children: [
      {
        path: 'departments',
        component: departments
      },
      {
        path: 'list',
        component: Tickets
      },
      {
        path: 'ticket/:id',
        component: Ticket
      }
    ]
  }
]

export default routes
