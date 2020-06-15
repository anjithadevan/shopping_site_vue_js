import Vue from "vue";
import Vuex from "vuex";
import {FETCH_PRODUCTS, INCREMENT_COUNT, DECREMENT_COUNT,EMPTY_CART} from "./actions.type";
// import axios from 'axios';
// import productsDetails from '../assets/productsDetails.json'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {}
  },
  mutations: {
    setProductsDetails(state, data) {
      state.products = data;
    },
    incrementCount(state, index) {
      state.products[index].count = state.products[index].count + 1;
    },
    decrementCount(state, index) {
      state.products[index].count = state.products[index].count - 1;
    },
    emptyCart(state) {
      state.products.forEach(product => {
        product["count"] = 0;
      });
    }
  },
  actions: {
    [FETCH_PRODUCTS](context) {
      fetch("productsDetails.json")
        .then(response => response.json())
        .then(response => {
          context.commit("setProductsDetails", response.data);
      })
        .catch(function() {});
    },
    [INCREMENT_COUNT](context, index) {
      context.commit("incrementCount", index);
    },
    [DECREMENT_COUNT](context, index) {
      context.commit("decrementCount", index);
    },
    [EMPTY_CART](context) {
      context.commit("emptyCart");
    }
  },
  modules: {}
});
