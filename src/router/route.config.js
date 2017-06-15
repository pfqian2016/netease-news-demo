import News from '../components/News.vue'
import User from '../components/UserCenter.vue'

import Military from '../components/newsType/Military.vue'
import Sports from '../components/newsType/Sports.vue'
import Technique from '../components/newsType/Technique.vue'
import Education from '../components/newsType/Education.vue'
import Entertainment from '../components/newsType/Entertainment.vue'
import Finiance from '../components/newsType/Finiance.vue'
import Stock from '../components/newsType/Stock.vue'
import Travel from '../components/newsType/Travel.vue'
import Female from '../components/newsType/Female.vue'
const routes = [
    {
        path:'/news',
        component: News,
        children: [
            {
                path: '',
                redirect: 'military'
            },
            {
                path: 'military',
                component: Military
            },
            {
                path: 'sports',
                component: Sports
            },
            {
                path: 'technique',
                component: Technique
            },
            {
                path: 'education',
                component: Education
            },
            {
                path: 'entertainment',
                component: Entertainment
            },
            {
                path: 'finiance',
                component: Finiance
            },
            {
                path: 'stock',
                component: Stock
            },
            {
                path: 'travel',
                component: Travel
            },
            {
                path: 'female',
                component: Female
            }
        ]
    },
    {
        path:'/user',
        component: User
    },
    {
        path: '*',
        redirect: '/news/military'
    }
]

export default routes
