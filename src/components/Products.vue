<template>
  <div>Products</div>
  <ul>
      <li v-for="product in allProducts" :key="product.id">
{{product.id}} | {{product.title}}
      </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ProductsVue",
  computed:mapGetters(["allProducts"])
};
</script>
