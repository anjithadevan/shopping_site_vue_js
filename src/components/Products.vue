<template>
    <div>
    <div class="container" v-for="(product,index) in (products)"  v-bind:key="index">
        <div class="row">
            <div class="column side">
                <img :src=product.image_url width="100" class="product-img">
                <div>{{product.offer_text}}</div>
            </div>
            <div class="column middle">
                <div class="product-brand-name">{{product.brand_name}}</div>
                <div class="product-name">{{product.product_name}}</div>
                <div class="product-details">{{product.quantity}}</div>
                <div class="product-details">{{product.MRF}}</div>
                <div class="product-details"><b>RS <span> </span>{{product.price}}</b></div>
                <div class="add-cart"><button class="cart-button" @click="incrementCount(index)">Add To Cart</button>
                <span class="inc-dec-span">
                  <button class="inc-dec-button" @click="decrementCount(index,product.count)" v-if="product.count == 0" disabled>-</button>
                  <button class="inc-dec-button" @click="decrementCount(index)" v-else>-</button>
                  {{product.count}}
                  <button class="inc-dec-button" @click="incrementCount(index)">+</button>
                </span>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <hr>
    </div>
    </div>
</template>
<script>
import {INCREMENT_COUNT,DECREMENT_COUNT} from "@/store/actions.type";
import { mapState } from 'vuex'
export default {
    name:'products',
    computed: {
        ...mapState({
            products: 'products'
        })
    },
    methods:{
        decrementCount(index){
            this.$store.dispatch(DECREMENT_COUNT,index)
        },
        incrementCount(index){
            this.$store.dispatch(INCREMENT_COUNT,index)
        }
    },
}
</script>
<style scoped>
.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 40px;
}
.column {
  float: left;
  padding: 10px;
}

/* Left and right column */
.column.side {
  width: 25%;
  padding-left: 20%;
}

/* Middle column */
.column.middle {
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column.side, .column.middle {
    width: 100%;
  }
}
.product-img {
  padding-left: 20px
}
.product-brand-name{
  font-size: xx-large;font-weight: bold;
}
.product-name{
  font-size: x-large;
}
.product-details{
  font-size: larger;
}
.add-cart{
  padding-top: 10px;
  padding-bottom: 10px;

}
.cart-button{
  background: green;
  padding: 5px 26px;
  border-radius: 5px;
  font-weight: 600;
  font-size: large;
}
.inc-dec-button{
  color: black;
  background: green;
  font-weight: bold;
  border-radius: 60%;
  padding: 5px 15px;
}
.inc-dec-span{
  padding-left: 30px;
}
@media screen and (max-width: 1024px){
  .inc-dec-span{
    padding-left: 10px;
  }
}
</style>