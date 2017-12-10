import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VuePaginate from 'vue-paginate'
import mainContent from './components/mainContent.vue'
import login from './components/login.vue'
import mainResult from './components/mainResult.vue'
import highlyUI from './components/highly-ui/'
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VuePaginate)
Vue.use(highlyUI)


// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

// vuex store
const store = new Vuex.Store({
  state: {
    // headerFooterShouldHide:false,
    advSearchOpened: false,//高级搜索 
    contactUsOpened: false, //联系我们
    showRecommendedResults:true, //展示推荐机种 / 展示所有机种
    showAllResults:false,
    username:'',
    password:''
  },
  mutations: {
    // toggleAdvSearch(state) {
    //   state.advSearchOpened = !state.advSearchOpened
    // },
    // closeAdvSearch(state) {
    //   state.advSearchOpened = false;
    // },
    // toggleContactUs(state) {
    //   state.contactUsOpened = !state.contactUsOpened
    // },
    // closeContactUs(state) {
    //   state.contactUsOpened = false;
    // },
    toggleForm(state, name) {
      state[name] = !state[name];
    },
    closeForm(state, name) {
      state[name] = false;
    },
    setUserName(state,username) {
      state.username = username;
    },
    setPassWord(state,password) {
      state.password = password;
    },
    toggleSearchResults(state,whichOne) {
      state.showRecommendedResults = false;
      state.showAllResults = false;
      (whichOne === 'recommended') ? state.showRecommendedResults = true: state.showAllResults = true;
    }
  }
})

// router config
const routes = [
  { path: '/', name:'home', component: mainContent },
  { path: '/list', name:'list', component: mainResult },
  { path: '/login', name:'login', component: login }
  // { path: '/bar', component: Bar }
];
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})