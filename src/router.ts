import { createRouter, createWebHashHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceive from './pages/requests/RequestReceive.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    children: [
      {
        path: 'contact',
        component: ContactCoach,
      },
    ],
  },
  { path: '/register', component: CoachRegister },
  { path: '/request', component: RequestReceive },
  { path: '/:notFound(.*)*', component: NotFound },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
