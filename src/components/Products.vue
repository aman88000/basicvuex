<template>
  <div>Products</div>
  <ul>
      <li v-for="product in allProducts" :key="product.id">
{{product.id}} | {{product.title }}
    <button @click="deleteProduct(product.id)">X</button>
      </li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "ProductsVue",
  methods:{
      ...mapActions(["getProducts", "deleteProduct"])
  },
  computed:mapGetters(["allProducts"]),
  created(){
      this.getProducts()
  },
  updated(){
      this.getProducts()
  }
};
</script>
