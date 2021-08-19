<template>
<v-container>
<v-row
        align="end"
         no-gutters
        style="height: 150px;">
      <h1 class="text-right">LOAD DATA PRODUCTS</h1>
   </v-row> 
          
    <v-card class="mb-3" v-for="(item, index ) in cantidadp" :key="index.queryProducts">
      <v-card-title></v-card-title>
      <v-card-text v-for="(item2, index2 ) in cantidadp" :key="index2">
        <a>Number of Products Charged:</a> {{item2.numUids}}
      </v-card-text>
    </v-card>


  <div class="text-center">
    <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
    >
      Start loading Products
    </v-btn>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>

  </v-container>
</template>

<script  src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";
export default ({  
  data() {     
      return {
        dialog: false,
        cantidadp : null
      }      
        },        
  watch: {
      dialog (val) {
        if (!val) return
        setTimeout(() => (this.dialog = false), 4000)       
        
        axios
          .get('http://localhost:9000/cargarp')
          .then(response => (this.cantidadp = response.data.data))
          .catch(e => {console.log(cantidadp)})  
    
      },
    },
  
    
})
</script>
