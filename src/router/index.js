import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "@firebase/app";
import SignUp from '../components/pages/SignUp.vue'
import SignIn from '../components/pages/SignIn.vue'
import Test from '../components/Test.vue'
import TestTwo from '../components/TestTwo.vue'
import Profile from '../components/pages/Profile.vue'
import ChatRoom from '../components/pages/ChatRoom.vue'
import FriendList from '../components/pages/FriendList.vue'
import FriendSearch from '../components/pages/FriendSearch.vue'
import Chat from '../components/pages/Chat.vue'
import Loading from '../components/pages/Loading.vue'
import BulletinBoard from '../components/pages/BulletinBoard.vue'
import Menu from '../components/pages/Menu.vue'
import DeleteAccount from '../components/pages/DeleteAccount.vue'
import NotificationMobile from '../components/pages/NotificationMobile.vue'
import TestChat from '../components/pages/TestChat.vue'







Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: 'profile'
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
    path: '/loading',
    name: 'loading',
    component: Loading
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
    path: '/chatRoom',
    name: 'chatRoom',
    component: ChatRoom,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/:uid',
    name: 'friendProfile',
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
  {
    path: '/bulletinBoard',
    name: 'bulletinBoard',
    component: BulletinBoard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/deleteAccount',
    name: 'deleteAccount',
    component: DeleteAccount,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notificationMobile',
    name: 'notificationMobile',
    component: NotificationMobile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/testChat',
    name: 'testChat',
    component: TestChat,
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
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
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