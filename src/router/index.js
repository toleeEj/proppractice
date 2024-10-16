// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import CardListView from '../components/CardListView.vue';  // Component to display list of cards
import CardDetailView from '../components/CardDetailView.vue'; // Component to display details of a selected card

const routes = [
  {
    path: '/', // Route for the card list
    name: 'CardList',
    component: CardListView,
  },
  {
    path: '/detail/:id', // Dynamic route for card details, using `:id` as a route parameter
    name: 'CardDetail',
    component: CardDetailView,
    props: true, // Pass the route parameters as props to the CardDetailView component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Short for `routes: routes`
});

export default router;
