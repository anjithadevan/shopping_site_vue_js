<template>
    <Fragment>
        <div class="footer">
            <div class="footer-content">
            Qty {{totalQuantity($store.state.products)}}
            </div><br><br>
            <div class="footer-content">
            Total {{totalPrice($store.state.products)}}
            </div>
            <button class="checkout-btn" @click="ckeckOut(totalPrice($store.state.products))">CHECKOUT</button>
        </div>
    </Fragment>
</template>
<script>
import {Fragment} from 'vue-fragment'
export default {
    data: function() {
        return {
            total:0,
            quantity:0
        }
    },
    components:{
        Fragment
    },
    methods: {
        totalQuantity(products_list){
            this.calculate_val(products_list)
            return this.quantity
        },
        totalPrice(products_list){
            this.calculate_val(products_list)
            return this.total
        },
        calculate_val(products_list){
            var count = 0
            var total_val = 0
            if(products_list.length >0){
                products_list.forEach(element => {
                    count = count+element['count']
                    total_val = total_val + element['count']*element['price']
                });
            }
            this.total = total_val
            this. quantity = count
            return true
        },
        ckeckOut(total){
            this.$emit('ckeckOut',total);
        }
    },
}
</script>
<style scoped>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #e222cb;
   color: white;
   text-align: center;
   height: 10%;
   margin-top: 10px;
   padding-top: 20px;
}
.checkout-btn{
    background: #549013;
    border-radius: 5px;
    font-weight: 600;
    font-size: large;
    margin-left:80%;
}
.footer-content{
    float:left;
    font-size: medium
}
</style>