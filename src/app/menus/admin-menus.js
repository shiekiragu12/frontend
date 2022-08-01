const menus = [
  {
    slug: 'admin_dashboard',
    type: 'single',
    label: 'Dashboard',
    icon: 'bi-speedometer2',
    url: 'admin/dashboard'
  },
  {
    slug: 'maintenance_and_logs',
    type: 'single',
    label: 'Departments',
    icon: 'bi-speedometer2',
    url: 'admin/departments'
  },
  {
    slug: 'maintenance_and_logs',
    type: 'single',
    label: 'Logs',
    icon: 'bi-speedometer2',
    url: 'logs'
  },
  {
    slug: 'config',
    type: 'many',
    label: 'Settings',
    icon: 'bi-globe',
    url: 'settings',
    children:[
      {
        slug: "deadlines",
        label: "Core Settings",
        url: "config/settings"
      },
      {
        slug: "deadlines",
        label: "Websites",
        url: "config/settings/websites"
      },
      {
        slug: "deadlines",
        label: "Academic Levels",
        url: "config/settings/academic-levels"
      }
    ]
  },
  {
    slug: 'maintenance_and_logs',
    type: 'many',
    label: 'Maintenance',
    icon: 'bi-globe',
    url: 'maintenance',
    children:[
      {
        slug: "issues",
        label: "Issues",
        url: "maintenance/core/issues/tab/pending"
      },
      {
        slug: "tasks",
        label: "New Tasks",
        url: "maintenance/core/tasks/tab/pending"
      },
      {
        slug: "ideas",
        label: "Ideas",
        url: "maintenance/core/ideas/tab/pending"
      },
      {
        slug: "urgency",
        label: "Urgencies",
        url: "maintenance/config/urgencies"
      }
    ]
  },
  {
    slug: 'ticket',
    type: 'many',
    label: 'Tickets',
    icon: 'bi-ticket',
    url: 'tickets',
    children:[
      {
        slug: "ticket_department",
        label: "Ticket Department",
        url: "tickets/departments"
      },
      {
        slug: "ticket_department",
        label: "Tickets",
        url: "tickets/list"
      }
    ]
  },
  {
    slug: 'payments',
    type: 'many',
    label: 'Payments',
    icon: 'bi-wallet',
    url: 'payments',
    children:[
      {
        slug: "accounts",
        label: "Accounts",
        url: "payments/accounts/withdrawals"
      },
      {
        slug: "topups",
        label: "Top Ups",
        url: "payments/top-ups"
      }
    ]
  },
  {
    slug: 'stickynotes',
    type: 'single',
    label: 'Sticky Notes',
    icon: 'bi-book',
    url: 'sticky-notes',
  },
  {
    slug: 'links',
    type: 'single',
    label: 'Links',
    icon: 'bi-link',
    url: 'links',
  },
  {
    slug: 'announcement',
    type: 'single',
    label: 'Announcement',
    icon: 'bi-megaphone',
    url: 'announcements',
  },
  {
    slug: 'guides',
    type: 'single',
    label: 'Guides',
    icon: 'bi-book',
    url: 'guides',
  }
]
export default menus
