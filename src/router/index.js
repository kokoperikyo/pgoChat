import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/pages/SignUp.vue'
import SignIn from '../components/pages/SignIn.vue'
import SignInEmail from '../components/pages/SignInEmail.vue'
import SignUpEmail from '../components/pages/SignUpEmail.vue'
import Test from '../components/Test.vue'
import Profile from '../components/pages/Profile.vue'




Vue.use(VueRouter)

const routes = [{
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signInEmail',
    name: 'signInEmail',
    component: SignInEmail
  },
  {
    path: '/signUpEmail',
    name: 'signUpEmail',
    component: SignUpEmail

  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router