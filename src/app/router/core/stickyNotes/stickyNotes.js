import StickyNotes from '#/stickyNotes/stickyNotes.vue'
import active from '#/stickyNotes/tabs/active.vue'
import resolved from '#/stickyNotes/tabs/resolved.vue'
const routes = [
    {
        path: '/sticky-notes',
        component: StickyNotes,
        children: [
            {
                path: 'tab/active',
                component: active
            },
            {
                path: 'tab/resolved',
                component: resolved
            }
         ]
    }
]
export default routes
