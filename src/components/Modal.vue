<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <button
            type="button"
            class="btn-close"
            @click="close('close')"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body" v-if="total_price !=0">
          <h3>Transaction successful</h3>
          <h4><b>Total Price : {{total_price}}</b></h4>
        </slot>
        <slot name="body" v-else>
            Cart is empty
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close('ok')"
            >
              ok
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
    name: 'modal',
    methods: {
      close(val) {
        this.$emit('close',val);
      },
    },
    props:['total_price']
}
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  </style>