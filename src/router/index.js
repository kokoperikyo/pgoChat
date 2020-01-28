import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "@firebase/app";
import SignUp from '../components/pages/SignUp.vue'
import SignIn from '../components/pages/SignIn.vue'
import SignInEmail from '../components/pages/SignInEmail.vue'
import SignUpEmail from '../components/pages/SignUpEmail.vue'
import Test from '../components/Test.vue'
import TestTwo from '../components/TestTwo.vue'
import Profile from '../components/pages/Profile.vue'
import FriendList from '../components/pages/FriendList.vue'
import FriendSearch from '../components/pages/FriendSearch.vue'
import Chat from '../components/pages/Chat.vue'


Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: 'SignIn'
  }, {
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
    component: Test,
  },
  {
    path: '/testTwo',
    name: 'testTwo',
    component: TestTwo
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/friendList',
    name: 'friendList',
    component: FriendList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/friendSearch',
    name: 'friendSearch',
    component: FriendSearch,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chat/:uid',
    name: 'chat',
    component: Chat,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signIn',
          query: {
            redirect: to.fullPath
          }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router