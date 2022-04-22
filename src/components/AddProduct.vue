<template>
  <form @submit.prevent="onSubmit">
      <input type="text" placeholder="title" v-model="title" />
      <!-- <input type="text" v-model="Des" /> -->
      <input type="submit" value="submit" />
  </form>
  <br />
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "AddProduct",
  data(){
      return{
          title: '',
      
      }
  },
  methods:{
      ...mapActions(["addProduct"]),
      onSubmit(){
          
          this.addProduct({
              title: this.title.toUpperCase(),
          })

          this.title = ''
      }
  },
};
</script>
