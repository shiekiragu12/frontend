import UserMain from '#/user/UserMain.vue'
import Profile from '#/user/Profile.vue'
import ProfileTab from '#/user/tabs/ProfileTab.vue'
import SettingTab from '#/user/tabs/SettingsTab.vue'
const routes = [
    {
        path:'/user',
        component: UserMain,
        children: [
            {
                path: 'profile',
                component: Profile,
                children:[
                    {
                        path:'tab/profile',
                        component: ProfileTab
                    },
                    {
                       path:'tab/settings',
                       component: SettingTab
                    }
                ]
            }
        ]
    }
]

export default routes
