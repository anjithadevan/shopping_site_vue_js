<template>
  <div class="home">
    <Footer @ckeckOut = ckeckOut></Footer>
    <Products></Products>
    <Modal :total_price = total_price v-if="modalFlag" @close = close></Modal>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Products from '../components/Products'
import Modal from '../components/Modal'
import {FETCH_PRODUCTS,EMPTY_CART} from "@/store/actions.type";
export default {
  name: "Home",
  data: function() {
    return {
      total_price:0,
      modalFlag:false
    }
  },
  components:{
    Footer,
    Products,
    Modal
  },
  mounted: function() {
    this.$store.dispatch(FETCH_PRODUCTS)
  },
  methods:{
    ckeckOut(total){
      this.total_price = total
      this.modalFlag = true
    },
    close(val){
      this.modalFlag = false
      if (val == 'ok'){
        this.$store.dispatch(EMPTY_CART)
      }
    }
  }
};
</script>
