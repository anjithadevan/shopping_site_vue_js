import Vue from "vue";
import Vuex from "vuex";
import {FETCH_PRODUCTS, INCREMENT_COUNT, DECREMENT_COUNT} from "./actions.type";
import axios from 'axios';
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
    }
  },
  actions: {
    [FETCH_PRODUCTS](context) {
      axios
        .get("http://localhost:3000/data")
        .then(response => {
          context.commit("setProductsDetails", response.data);
      })
        .catch(function() {});
    },
    [INCREMENT_COUNT](context,index){
      context.commit("incrementCount", index);
    },
    [DECREMENT_COUNT](context,index){
      context.commit("decrementCount", index);
    }
  },
  modules: {}
});
