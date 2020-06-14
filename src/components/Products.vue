<template>
    <div>
    <div class="container" v-for="(product,index) in (products)"  v-bind:key="index">
        <div class="row">
            <div class="column side">
                <img :src=product.image_url width="100">
                <div>{{product.offer_text}}</div>
            </div>
            <div class="column middle">
                <div>{{product.brand_name}}</div>
                <div>{{product.product_name}}</div>
                <div>{{product.quantity}}</div>
                <div>{{product.MRF}}</div>
                <div><b>RS <span> </span>{{product.price}}</b></div>
                <div><button @click="incrementCount(index)">Add To Cart</button></div>
                <div>
                    <button @click="decrementCount(index,product.count)" v-if="product.count == 0" disabled>-</button>
                    <button @click="decrementCount(index)" v-else>-</button>
                    {{product.count}}
                    <button @click="incrementCount(index)">+</button></div>
            </div>
        </div>
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
}
.column {
  float: left;
  padding: 10px;
}

/* Left and right column */
.column.side {
  width: 25%;
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
</style>