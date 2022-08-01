import academicLevelCore from '@/resources/views/core/config/academicLevels/academicLevelCore.vue'
import AcademicLevels from '@/resources/views/core/config/academicLevels/AcademicLevels.vue'
import AcademicLevel from '@/resources/views/core/config/academicLevels/academicLevel/AcademicLevel.vue'
import Deadlines from '@/resources/views/core/config/academicLevels/academicLevel/tabs/Deadlines.vue'
const routes = [
    {
        path: '/config/settings',
        component: academicLevelCore,
        children: [
            {
                path: 'academic-levels',
                component: AcademicLevels,
            },
            {
                path: 'academic-levels/academic-level/:id',
                component: AcademicLevel,
                children: [
                    {
                        path: 'tab/deadline',
                        component: Deadlines,
                    }
                ]
            }
        ]
    }
]
export default routes
