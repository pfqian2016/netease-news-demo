import News from '../components/News.vue'
import User from '../components/UserCenter.vue'
// const Military = {template:'<div>{{this.$route.path}}<br>{{this.$route.path}}<br>{{this.$route.path}}<br>{{this.$route.path}}<br></div>'}
const Sports = {template:'<div>{{this.$route.path}}</div>'}
const Technique = {template:'<div>{{this.$route.path}}</div>'}
const Education = {template:'<div>{{this.$route.path}}</div>'}
const Entertainment = {template:'<div>{{this.$route.path}}</div>'}
const Finiance = {template:'<div>{{this.$route.path}}</div>'}
const Stock = {template:'<div>{{this.$route.path}}</div>'}
const Travel = {template:'<div>{{this.$route.path}}</div>'}
const Female = {template:'<div>{{this.$route.path}}</div>'}

import Military from '../components/newsType/Military.vue'

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
